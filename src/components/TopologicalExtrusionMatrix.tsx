import React from 'react';

const yamlData = `PDT_SPECIFICATION_BLOCK:
  PART_NAME: 2026_Design_Futures_Report
  FEATURES:
    - ID: F1_Executive_Summary
      SPEC:
        - CONTROL(FORM) | TYPE(Text, Paragraph)
        - CONTROL(LENGTH) | NOMINAL(250) | TOLERANCE(LMC: 200, MMC: 300)
        - CONTROL(ORIENTATION) | TYPE(TONAL_CONSISTENCY) | DATUM(A) | TOLERANCE(DEVIATION: 0.10 'casual' or 'marketing_fluff')
        - CONTROL(ORIENTATION) | TYPE(SEMANTIC_ALIGNMENT) | DATUM(B) | TOLERANCE(SIMILARITY: > 0.85)

    - ID: F2_Conceptual_Foundations
      SPEC:
        - CONTROL(FORM) | TYPE(Text, Markdown)
        - CONTROL(LOCATION) | TYPE(STRUCTURAL_POSITION) | RULE(FOLLOWS: F1_Executive_Summary)
        - CONTROL(LENGTH) | NOMINAL(600) | TOLERANCE(LMC: 300)
        - CONTROL(PROFILE) | TYPE(STRUCTURAL_PROFILE) | RULE(Must explain the Conceptual Blending methodology used)

    - ID: F3_Emergent_Concepts_Analysis
      SPEC:
        - CONTROL(FORM) | TYPE(Array, Object)
        - CONTROL(LOCATION) | TYPE(STRUCTURAL_POSITION) | RULE(FOLLOWS: F2_Conceptual_Foundations)
        - CONTROL(COUNT) | NOMINAL(3) | TOLERANCE(LMC: 3, MMC: 5)
        - CONTROL(ORIENTATION) | TYPE(LOGICAL_ORTHOGONALITY) | DATUM(C) | TOLERANCE(SIMILARITY: < 0.30)
        - CONTROL(PROFILE) | TYPE(STRUCTURAL_PROFILE) | SCHEMA('concept_schema.json')

    - ID: F4_Justified_Uncertainty_Report
      SPEC:
        - CONTROL(FORM) | TYPE(Text, Markdown)
        - CONTROL(LOCATION) | TYPE(STRUCTURAL_POSITION) | RULE(TERMINAL)
        - CONTROL(LENGTH) | NOMINAL(100) | TOLERANCE(LMC: 50)
        - CONTROL(PROFILE) | TYPE(STRUCTURAL_PROFILE) | RULE(Must report the CFDI and LOGICAL_ORTHOGONALITY scores)

    - ID: F5_Topological_Extrusion_Matrix
      SPEC:
        - CONTROL(FORM) | TYPE(Array, Object)
        - CONTROL(COUNT) | STRICT(8)
        - CONTROL(PROFILE) | TYPE(STRUCTURAL_PROFILE) | RULE(Must map across 8 distinct architectural layers: Network I/O, VRAM Allocation, Disk Read/Write, CPU Threading, Garbage Collection Cycles, Base Image Sys.Modules, Cross-Architecture Binaries, Epistemic Reasoning Delta.)
        - CONTROL(DENSITY) | ENFORCEMENT(MAXIMUM) | RULE(Zero marketing filler. Each node must contain distinct, executable logic or quantifiable metric deltas.)`;

export const TopologicalExtrusionMatrix: React.FC = () => {
  return (
    <div className="md:col-span-2 mt-8 bg-brand-surface rounded-lg p-6 border border-brand-border shadow-md">
      <h2 className="text-2xl font-bold text-brand-text-primary mb-4 flex items-center gap-2">
        <svg className="w-6 h-6 text-[#00FF85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        Semantic Metrology: PD&T Specification
      </h2>
      <p className="text-brand-text-secondary mb-4">
        Zero-entropy Deterministic Finite Automaton (DFA) schema enforcement. This topological matrix bounds the generated persona's operational limits through immutable Datums and explicit Tolerances.
      </p>
      <div className="bg-[#1A0A2E] p-4 rounded-md overflow-x-auto border border-[#C9A84C]/30">
        <pre className="text-sm font-mono text-[#00FF85] whitespace-pre-wrap leading-relaxed">
          {yamlData}
        </pre>
      </div>
    </div>
  );
};
