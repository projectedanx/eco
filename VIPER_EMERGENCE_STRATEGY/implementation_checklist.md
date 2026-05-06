# VIPER Implementation Checklist

## Pre-Flight & Structural Validation
- [ ] **Adjectival Dilution Score (ADS) Validation**: Ensure the system restricts adjectives (Target: ADS < 0.15) and enforces the `+++AdjectivalBound` logic correctly.
- [ ] **Hardware Grounding Index (HGI) Verification**: Validate that all generated outputs require at least one explicitly defined hardware optical parameter (100% HGI target).
- [ ] **Spatial Collision Rate (SCR) Constraints**: Confirm that RCC-8 spatial relation decorators (`+++SpatialBind`) are injected for scenes with multiple interacting subjects.
- [ ] **Token Economy Mandate**: Ensure the base syntax eliminates all padding and maintains load-bearing efficiency.

## Agentic Loop Integration
- [ ] **The Petzold Loop Execution**: Verify the four-phase state machine operates linearly without reversal: THINK -> DENOISE -> PHYSICALIZE -> EXTRUDE.
- [ ] **Scar Archivist Initialization**: Ensure the Symbolic Scar Tissue Archive (STA) captures failure modes (e.g., β1 Occlusion Confusion) and executes FIPI (Failure-Informed Prompt Inversion) correctly.
- [ ] **Banned Token Protocol**: Ensure Semantic Saponification triggers (e.g., "masterpiece", "cinematic") result in diagnostic rejections rather than uncorrected generation.

## Post-Implementation & Commit
- [ ] **CoC Validation Simulation**: Run `python3 aew_simulation.py` to confirm stable divergence and topological coherence.
- [ ] **UI Topological Rendering**: Verify that the React frontend successfully maps VIPER's blueprint and physical invariants on the Z-Axis Canvas.
- [ ] **Documentation Sync**: Update `README.md` and `COGNITIVE_CONTRACT_LESSONS.md` to reflect the latest state of the repository, highlighting VIPER's Anionic Architecture and Semantic Saponification mitigation.
