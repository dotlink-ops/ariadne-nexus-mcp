# Ariadne Nexus — Quantitative Fixed-Income, OFAC Sanctions & SEC Forensic MCP Server

[![Ariadne Nexus MCP connector](https://glama.ai/mcp/connectors/com.ariadnenexus/ariadne-nexus-quantitative-engine/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/ariadne-nexus-quantitative-engine)
[![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-com.ariadnenexus-10b981)](https://registry.modelcontextprotocol.io/?q=ariadnenexus)

Institutional Model Context Protocol (MCP) server for **9-digit CUSIP corporate & Treasury bond valuation**, **FINRA TRACE secondary debt spreads**, **multi-bond portfolio VaR/CVaR stress testing**, **OFAC SDN & 31 CFR Part 501 safe-harbor closing certificates**, and **SEC XBRL forensic accounting & Form TCR whistleblower workpapers**.

- **Interactive Conversion Hub & 1-Click Cursor / VS Code Install:** <https://ariadnenexus.com/docs/mcp>
- **Flagship Remote Streamable HTTP (`11` tools):** `https://ariadnenexus.com/mcp`
- **Persona-Focused Sub-Servers (`6` tools each):**
  - Fixed-Income & TRACE (`#1` on `cusip` globally): `https://ariadnenexus.com/mcp/cusip-bond-trace-finance`
  - OFAC Sanctions & Escrow (`#1` on `ofac` & `escrow` globally): `https://ariadnenexus.com/mcp/ofac-sanctions-escrow`
  - SEC XBRL Forensics & Whistleblower (`#1` on `whistleblower` globally): `https://ariadnenexus.com/mcp/sec-forensics-whistleblower`

---

## Quick Connect

### Option 1: Direct Remote Streamable HTTP (Recommended — Zero Install)

```bash
claude mcp add --transport http ariadne-nexus https://ariadnenexus.com/mcp
```

Or add to `.cursor/mcp.json` / `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ariadne-nexus": {
      "url": "https://ariadnenexus.com/mcp",
      "headers": {
        "X-Nexus-API-Key": "nexus_live_..."
      }
    }
  }
}
```

### Option 2: Local Stdio Bridge (`npx` or Docker)

```json
{
  "mcpServers": {
    "ariadne-nexus": {
      "command": "npx",
      "args": ["-y", "github:dotlink-ops/ariadne-nexus-mcp"],
      "env": {
        "NEXUS_API_KEY": "nexus_live_..."
      }
    }
  }
}
```

To bind a specific vertical sub-server over stdio, pass `--vertical=cusip-bond-trace-finance`, `--vertical=ofac-sanctions-escrow`, or `--vertical=sec-forensics-whistleblower`.

---

## Available Tools (`11` Total)

| Tool | Cost | Summary |
| :--- | :--- | :--- |
| `calculate_clearing_fee` | **Free** | Institutional RWA & sovereign debt clearing fee calculator |
| `provision_agent_key` | **Free** | Mints live Stripe Checkout links (`$10/mo` `EVAL_PASS` or persona SKUs) in chat |
| `redeem_checkout_session` | **Free** | Redeems a paid `cs_...` session ID into a live `nexus_live_...` API key in chat |
| `get_cusip_valuation` | `$0.50` / API key | 9-digit CUSIP YTM, modified/Macaulay duration, convexity, DV01, Treasury OAS |
| `get_debt_radar` | `$0.50` / API key | FINRA TRACE secondary bond spreads, Altman Z-Score, zero-cost equity collars |
| `run_portfolio_stress_test` | `$0.50` / API key | Multi-bond parallel/steepener/credit-widening shock VaR & CVaR studio |
| `screen_ofac_entity` | `$0.50` / API key | Zero-trust OFAC SDN & Consolidated counterparty fuzzy/LEI screening + Merkle proof |
| `issue_safe_harbor_certificate` | `$95` / API key | 31 CFR Part 501 Cloud KMS-signed closing safe-harbor certificate (HUD-1 Line 1109 pass-through) |
| `generate_sec_tcr_bounty_dossier` | `$295` / API key | Beneish M-Score & SEC Form TCR whistleblower forensic XBRL workpaper |
| `synthesize_regulatory_docket` | `$0.50` / API key | APA 5 U.S.C. § 553 federal rulemaking economic impact & comment letter |
| `get_sovereign_policy_brief` | `$0.50` / API key | Weekly Fed, U.S. Treasury, FinCEN & SEC policy shock brief |

> **Zero Cold-Start Friction:** Unauthenticated calls to paid tools return a **Redacted Proof-of-Value Teaser** plus a 1-click `$10/mo` Builder Pass (`EVAL_PASS`, `250` calls/mo) checkout link. After payment, call `redeem_checkout_session` directly inside chat to claim your live `nexus_live_...` key immediately.

## License

MIT © Ariadne Nexus
