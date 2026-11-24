# Ariadne Nexus: Sovereign Quant, OFAC Safe-Harbor, SEC Forensics & Zero-PII Provenance MCP Suite

[![Ariadne Nexus MCP server: quality and maintenance score on Glama](https://glama.ai/mcp/servers/dotlink-ops/ariadne-nexus-mcp/badges/score.svg)](https://glama.ai/mcp/servers/dotlink-ops/ariadne-nexus-mcp)
[![Ariadne Nexus MCP connector](https://glama.ai/mcp/connectors/com.ariadnenexus/ariadne-nexus-quantitative-engine/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/ariadne-nexus-quantitative-engine)
[![Ariadne Nexus Provenance & Underwriting MCP connector](https://glama.ai/mcp/connectors/com.ariadnenexus/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/mcp-server)
[![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-com.ariadnenexus-10b981)](https://registry.modelcontextprotocol.io/?q=ariadnenexus)
[![Stripe MPP & x402 v2](https://img.shields.io/badge/Stripe_MPP_%2B_x402_v2-17%2F17_Passed-635bff)](https://ariadnenexus.com/openapi.json)
[![PyPI ariadne-verify](https://img.shields.io/badge/PyPI-ariadne--verify%200.1.8-3776ab)](https://pypi.org/project/ariadne-verify/)

Institutional Model Context Protocol (MCP) server suite for **9-digit CUSIP bond valuation**, **FINRA TRACE secondary spreads**, **multi-bond VaR/CVaR macro stress testing**, **31 CFR Part 501 OFAC SDN safe-harbor closing certificates**, **SEC XBRL Form TCR & broker-dealer FOCUS forensics**, and **Zero-PII Fine-Art Provenance & Halo2 IPA algebraic proofs (`ANX-RFC-001`)**.

---

## 1-Click Install & Instant Checkout

| Action | Link |
| :--- | :--- |
| **Install Flagship Quant & Compliance MCP in Cursor** | [![Install in Cursor](https://img.shields.io/badge/Cursor-1--Click%20Install-000000?logo=cursor)](https://cursor.com/en/install-mcp?name=ariadne-nexus&config=eyJ1cmwiOiJodHRwczovL2FyaWFkbmVuZXh1cy5jb20vbWNwIn0%3D) |
| **Install Flagship Quant & Compliance MCP in VS Code** | [![Install in VS Code](https://img.shields.io/badge/VS%20Code-1--Click%20Install-007ACC?logo=visualstudiocode)](https://vscode.dev/redirect/mcp/install?name=ariadne-nexus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fariadnenexus.com%2Fmcp%22%7D) |
| **Install Zero-PII Provenance & Halo2 MCP (`v0.1.8`) in Cursor** | [![Install Provenance MCP in Cursor](https://img.shields.io/badge/Cursor-Install%20Provenance%20v0.1.8-10b981)](https://cursor.com/en/install-mcp?name=ariadne-provenance&config=eyJ1cmwiOiJodHRwczovL21jcC5hcmlhZG5lbmV4dXMuY29tL21jcCJ9) |
| **Get Instant API Key: `$10/mo` Builder Pass (`250` calls/mo)** | [**`https://ariadnenexus.com/billing/checkout?plan=eval_pass`**](https://ariadnenexus.com/billing/checkout?plan=eval_pass) |
| **Activate `$2.50/proof` Metered PAYG (Stripe Billing)** | [**`https://ariadnenexus.com/billing/checkout?plan=metered_payg`**](https://ariadnenexus.com/billing/checkout?plan=metered_payg) |
| **Interactive MCP Hub, Schemas & Key Redemption** | [**`https://ariadnenexus.com/docs/mcp`**](https://ariadnenexus.com/docs/mcp) |

---

## Live Remote Streamable HTTP Endpoints

- **Flagship Quantitative, Compliance & Forensics (`12` tools):** `https://ariadnenexus.com/mcp`: [![Flagship Glama Connector](https://glama.ai/mcp/connectors/com.ariadnenexus/ariadne-nexus-quantitative-engine/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/ariadne-nexus-quantitative-engine)
- **Zero-PII Fine-Art Provenance, Halo2 IPA & Optical Forensics (`v0.1.8` • `7` tools):** `https://mcp.ariadnenexus.com/mcp` (`com.ariadnenexus/mcp-server@0.1.8`) [![Ariadne Nexus Provenance & Underwriting MCP connector](https://glama.ai/mcp/connectors/com.ariadnenexus/mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/mcp-server)
- **Persona-Focused Sub-Servers (`6` tools each):**
  - **Fixed-Income & FINRA TRACE** (`#1` on `cusip`): `https://ariadnenexus.com/mcp/cusip-bond-trace-finance`: [![CUSIP & Bond Finance Connector](https://glama.ai/mcp/connectors/com.ariadnenexus/cusip-bond-trace-finance/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/cusip-bond-trace-finance)
  - **OFAC Sanctions & Statutory Escrow** (`#1` on `ofac` & `escrow`): `https://ariadnenexus.com/mcp/ofac-sanctions-escrow`: [![OFAC & Escrow Connector](https://glama.ai/mcp/connectors/com.ariadnenexus/ofac-sanctions-escrow/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/ofac-sanctions-escrow)
  - **SEC XBRL Forensics & Whistleblower** (`#1` on `whistleblower`): `https://ariadnenexus.com/mcp/sec-forensics-whistleblower`: [![SEC Forensics Connector](https://glama.ai/mcp/connectors/com.ariadnenexus/sec-forensics-whistleblower/badges/score.svg)](https://glama.ai/mcp/connectors/com.ariadnenexus/sec-forensics-whistleblower)

---

## Quick Connect

### Option 1: Claude Code CLI (Zero Install)

```bash
# Flagship 12-tool Quant, OFAC & SEC Forensics server
claude mcp add --transport http ariadne-nexus https://ariadnenexus.com/mcp

# Zero-PII Provenance, Halo2 IPA & Optical Forensics server (v0.1.8)
claude mcp add --transport http ariadne-provenance https://mcp.ariadnenexus.com/mcp
```

### Option 2: Cursor / Claude Desktop (`.cursor/mcp.json` or `claude_desktop_config.json`)

```json
{
  "mcpServers": {
    "ariadne-nexus": {
      "url": "https://ariadnenexus.com/mcp",
      "headers": {
        "x-api-key": "nexus_live_..."
      }
    },
    "ariadne-provenance": {
      "url": "https://mcp.ariadnenexus.com/mcp",
      "headers": {
        "X-API-Key": "anx_live_..."
      }
    }
  }
}
```

### Option 3: Local Stdio Bridge (`npx` or Docker)

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

Pass `--vertical=cusip-bond-trace-finance`, `--vertical=ofac-sanctions-escrow`, or `--vertical=sec-forensics-whistleblower` to bind a focused persona sub-server over stdio.

---

## Autonomous Agent Payments (Stripe MPP v1.0 + Tempo Zero-Fee x402 v2)

Every paid endpoint supports **zero-human machine payments** alongside API keys:

- **Stripe Machine Payments Protocol (MPP):** `Authorization: Payment spt_...` (Stripe Directory handle: `ariadnenexus`)
- **Tempo Zero-Fee Base USDC x402 v2:** Automated HTTP `402 Payment Required` envelope (`PAYMENT-REQUIRED` + `WWW-Authenticate: Payment`) settling Base USDC directly via Tempo facilitator
- **Self-Serve Billing Checkout:** [`https://ariadnenexus.com/billing/checkout`](https://ariadnenexus.com/billing/checkout) (`$10/mo` `EVAL_PASS` • `$2.50/proof` Metered PAYG • `$99/mo` `STARTER` • `$499/mo` `QUANT_PRO`)

Validate live protocol compliance from any terminal:

```bash
npx mppx@latest validate https://ariadnenexus.com --endpoint POST:/api/v1/mpp/valuation
# Expected: 17 passed, 0 failed, 0 warnings
```

---

## Flagship Server Tools: `https://ariadnenexus.com/mcp` (`12` Canonical Tools)

| Tool | Cost | Summary |
| :--- | :--- | :--- |
| `calculate_clearing_fee` | **Free** | Institutional RWA & sovereign debt clearing take-rate (bps/USD) & settlement bridge calculator |
| `provision_agent_key` | **Free** | Mints live Stripe Checkout links (`$10/mo` `EVAL_PASS`, `$2.50` PAYG, or persona SKUs) in chat |
| `redeem_checkout_session` | **Free** | Redeems a paid `cs_...` session ID into a live `nexus_live_...` key + IDE install links in chat |
| `get_cusip_valuation` | `$0.50` / API key | 9-digit CUSIP YTM, Macaulay/modified duration, convexity, DV01 & Merton jump-diffusion 95% bounds |
| `get_debt_radar` | `$0.50` / API key | FINRA TRACE secondary dealer spreads, YTW, liquidity & zero-cost European collar strikes |
| `run_portfolio_stress_test` | `$2.50` / API key | Multi-bond parallel/twist/credit-widening macro shocks, portfolio DV01, 95%/99% VaR, CVaR & ZN hedges |
| `screen_ofac_entity` | `$0.50` / API key | Zero-trust OFAC SDN & Consolidated counterparty LEI/CIK/Jaro-Winkler screening + SHA-256 Merkle proof |
| `issue_safe_harbor_certificate` | `$95` / `10 bps` | 31 CFR Part 501 Cloud KMS-signed closing safe-harbor certificate (HUD-1 Line 1109 pass-through = `$0` firm cost) |
| `generate_sec_tcr_bounty_dossier` | `$2.50` / `$295` sample | 8-variable Beneish M-Score, Benford Chi-Square, Halliburton II event-study & Form 4/DEF 14A scienter matrix |
| `audit_broker_dealer_forensics` | `$2.50` / API key | SEC Form X-17A-5 (FOCUS) Rule 15c3-1 net capital cushions, Form 13F-HR books, FINRA BrokerCheck & OFAC proofs |
| `synthesize_regulatory_docket` | `$2.50` / API key | Formal APA (`5 U.S.C. § 553`) federal rulemaking comment letter backed by empirical TRACE & OFAC telemetry |
| `get_sovereign_policy_brief` | `$1.00` / API key | Weekly Federal Reserve (FOMC), U.S. Treasury (OFR/OFAC/FinCEN) & SEC DERA macro-prudential shock monitor |

> **Zero Cold-Start Friction:** Unauthenticated calls to paid tools return a **Redacted Proof-of-Value Teaser** plus a 1-click [`$10/mo` Builder Pass (`EVAL_PASS`, `250` calls/mo)](https://ariadnenexus.com/billing/checkout?plan=eval_pass) checkout link. After payment, call `redeem_checkout_session` inside chat to claim your live `nexus_live_...` key immediately.

---

## Zero-PII Provenance & Halo2 IPA Server: `https://mcp.ariadnenexus.com/mcp` (`v0.1.8`)

Built for **fine-art specie insurers, art-secured private credit desks, and conservation freeports** under [`ANX-RFC-001`](https://ariadnenexus.com/rfc/zk-prov-v1). Consignor PII and raw imagery never leave the vault perimeter; only cryptographic commitments cross the wire.

| Tool | Cost | Summary |
| :--- | :--- | :--- |
| `inspect_manifest_schema` | **Free** | Returns the pinned `ANX-RFC-001` manifest schema and active Ed25519 keyring |
| `verify_asset_hash` | **Free** | Verifies canonical SHA-256 asset & custody pre-hash commitments |
| `enroll_optical_scan` | **Free** | Registers RTI BRDF specular reflectance & VNIR spectral pigment hashes |
| `verify_zk_provenance_proof` | **Free** | Online verification of Vesta Halo2 IPA (`k=11`) + Ed25519 provenance binders |
| `verify_underwriting_compliance` | **Free** | Checks LTV advance-rate haircut & specie underwriting policy compliance |
| `generate_zk_provenance_proof` | `$2.50` PAYG / SPT / x402 | Proves custody continuity + optical surface integrity in Vesta Halo2 IPA (`k=11`) with zero PII |
| `batch_underwrite_portfolio` | Enterprise Pilot | Portfolio-level multi-asset specie & Merton 99% LTV underwriting (`$35,000` 90-day creditable pilot) |

### Offline Algebraic Verification (Zero Network Calls)

Verify any emitted Halo2 IPA proof binder completely air-gapped using the PyPI package:

```bash
uvx --isolated --from "ariadne-verify[halo2]==0.1.8" ariadne-verify <binder.json> --verify-halo2-algebraic
```

- **Technical Brief 1:** [Zero-PII Art-Secured Lending & Specie Underwriting (`ANX-RFC-001`)](https://ariadnenexus.com/briefs/zero-pii-art-lending)
- **Technical Brief 2:** [Overpaint & TiO2 Forgery vs. Merton 99% LTV Haircut Benchmark (`60.93%`)](https://ariadnenexus.com/briefs/overpaint-ltv-benchmark)
- **REST MPP Bridge:** `POST https://ariadnenexus.com/api/v1/mpp/provenance` (`$2.50 USD` via Stripe SPT / Tempo x402)

---

## Institutional Procurement & Self-Serve Terminals

- **31 CFR Part 501 OFAC Safe-Harbor Certificates (`$95` / `10 bps` HUD-1 pass-through):** <https://ariadnenexus.com/safe-harbor>
- **SEC Form TCR & Rule 10b-5 XBRL Forensic Dossiers (`$295` credited sample):** <https://ariadnenexus.com/forensics>
- **FAR Subpart 13.2 Federal Policy Radar (`$9,500/yr` GPC):** <https://ariadnenexus.com/policy-radar>
- **Billing, W-9 (`EIN 43-2510762`), Wire/ACH & Instant Checkout:** <https://ariadnenexus.com/billing/checkout>
- **Machine Discovery:** [`openapi.json`](https://ariadnenexus.com/openapi.json) • [`llms.txt`](https://ariadnenexus.com/llms.txt) • [`SKILL.md`](https://ariadnenexus.com/SKILL.md) • [`server-card.json`](https://ariadnenexus.com/.well-known/mcp/server-card.json)

## License

MIT © Ariadne Nexus Inc.
