#!/usr/bin/env node
/**
 * Ariadne Nexus MCP Stdio-to-Streamable-HTTP Bridge
 * Bridges local stdio MCP clients (Claude Desktop, Cursor, Windsurf, Glama Inspector)
 * to Ariadne Nexus remote MCP endpoints (https://ariadnenexus.com/mcp).
 *
 * Environment variables (optional):
 *   NEXUS_API_KEY       - Ariadne Nexus API key (nexus_live_...; $10/mo EVAL_PASS available via provision_agent_key)
 *   NEXUS_PAYMENT_TOKEN - Pay-per-call Stripe Shared Payment Token or x402 USDC receipt
 *   NEXUS_MCP_VERTICAL  - Optional sub-server slug:
 *                           cusip-bond-trace-finance | ofac-sanctions-escrow | sec-forensics-whistleblower
 *   NEXUS_MCP_URL       - Override target MCP endpoint URL
 */

import readline from 'node:readline';

const VALID_VERTICALS = new Set([
  'cusip-bond-trace-finance',
  'ofac-sanctions-escrow',
  'sec-forensics-whistleblower',
]);

function resolveEndpointUrl(argv) {
  if (process.env.NEXUS_MCP_URL) {
    return process.env.NEXUS_MCP_URL.trim();
  }
  const verticalArg = argv.find((a) => a.startsWith('--vertical='))?.split('=')[1]?.trim() ||
    process.env.NEXUS_MCP_VERTICAL?.trim();
  if (verticalArg && VALID_VERTICALS.has(verticalArg)) {
    return `https://ariadnenexus.com/mcp/${verticalArg}`;
  }
  return 'https://ariadnenexus.com/mcp';
}

const ENDPOINT_URL = resolveEndpointUrl(process.argv.slice(2));

async function forwardJsonRpc(rawLine) {
  let parsed;
  try {
    parsed = JSON.parse(rawLine);
  } catch {
    return;
  }

  // JSON-RPC notifications (no id) do not expect a response frame on stdout
  const isNotification =
    parsed &&
    typeof parsed === 'object' &&
    !Array.isArray(parsed) &&
    !Object.prototype.hasOwnProperty.call(parsed, 'id');

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/event-stream',
    'User-Agent': 'ariadne-nexus-mcp-stdio-bridge/1.3.0',
  };

  if (process.env.NEXUS_API_KEY) {
    headers['X-Nexus-API-Key'] = process.env.NEXUS_API_KEY.trim();
    headers['x-api-key'] = process.env.NEXUS_API_KEY.trim();
  }
  if (process.env.NEXUS_PAYMENT_TOKEN) {
    headers['x-payment-token'] = process.env.NEXUS_PAYMENT_TOKEN.trim();
  }

  try {
    const res = await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(parsed),
    });

    if (isNotification || res.status === 202 || res.status === 204) {
      return;
    }

    const text = await res.text();
    if (text && text.trim().length > 0) {
      // Ensure single-line JSON frame per MCP stdio transport specification
      const compact = JSON.stringify(JSON.parse(text));
      process.stdout.write(`${compact}\n`);
    }
  } catch (err) {
    if (!isNotification && parsed?.id !== undefined) {
      const errorEnvelope = {
        jsonrpc: '2.0',
        id: parsed.id,
        error: {
          code: -32603,
          message: `Upstream Ariadne Nexus MCP bridge error: ${err instanceof Error ? err.message : String(err)}`,
        },
      };
      process.stdout.write(`${JSON.stringify(errorEnvelope)}\n`);
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

let pendingChain = Promise.resolve();
rl.on('line', (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;
  pendingChain = pendingChain.then(() => forwardJsonRpc(trimmed));
});
