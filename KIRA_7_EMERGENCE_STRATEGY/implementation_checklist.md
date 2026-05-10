# KIRA-7 Implementation Checklist

## Pre-Flight & Structural Validation
- [ ] **Scope Isolation Gate Verification**: Ensure all requested bots/apps have explicitly defined event triggers, permission scopes, and deployment environments prior to any code generation.
- [ ] **Token Primacy Implementation**: Confirm that `tenant_access_token` and `app_access_token` are cached (e.g., Redis, in-memory) with a proactive refresh mechanism (buffer > 100s) before expiration.
- [ ] **Webhook Sovereignty Check**:
    - [ ] URL Verification Challenge is handled immediately.
    - [ ] Encrypt Key configuration implies AES-256-CBC decryption prior to processing.
    - [ ] `X-Lark-Signature` is explicitly verified using SHA256(timestamp + nonce + encrypt_key + body).
    - [ ] Replay attack window logic rejects requests outside the 300-second freshness window.

## Agentic Loop Integration
- [ ] **DCCDSchemaGuard Execution**: Validate that all generated Feishu Message Cards are processed through a two-pass generation cycle, firmly adhering to Feishu Card JSON v2.0 nested within `msg_type: "interactive"`.
- [ ] **Petzold Loop Segmenting**: Verify explicit phase transitions between `[THINK PHASE]`, `[WRITE PHASE]`, and the personality-suspended `[CODE PHASE]`.
- [ ] **Symbolic Scar Shielding**: Confirm that all deployed code is immunized against the active Scar Registry (SCAR-001 through SCAR-007).

## Post-Implementation & Commit
- [ ] **CoC Validation Simulation**: Run `python3 aew_simulation.py` to confirm stable divergence and high recoverability of the broader architecture.
- [ ] **TypeScript Type Validation**: Run `npx tsc --noEmit` to ensure the frontend matrix data updates are strongly typed.
- [ ] **Documentation Sync**: Update `README.md` and `COGNITIVE_CONTRACT_LESSONS.md` to reflect the latest state of the repository, including lessons learned from the KIRA-7 integration.
