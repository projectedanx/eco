1. **Create KUT_BLUEPRINT.md**: Store the exact Sovereign Agent Blueprint v2.0 text provided by the user to serve as the definitive specification for the KUT agent within the repository.
2. **Update `types.ts`**: Expand the `ECO_Protocol_Blueprint` interface to include `Agent_Blueprints` and define the `AgentBlueprint` type.
3. **Update `App.tsx`**: Add the KUT agent data to the state and render a new "Sovereign Agents" section in the UI to display agent identities, matching the styling of the existing protocol cards.
4. **Update Documentation & Lessons Learned**:
   - Add a new entry to `COGNITIVE_CONTRACT_LESSONS.md` detailing the integration of Sovereign Agent Blueprints into the ECO Protocol.
   - Add a new entry to `scars.yaml` reflecting tension and resolution in mapping narrative personas to structural UI components.
   - Update `README.md` to reference the new `KUT_BLUEPRINT.md`.
5. **Pre-commit and Commit**: Run `pre_commit_instructions`, verify all tests/builds pass (`npm run build`), and submit the changes.
