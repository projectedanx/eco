
export interface Mechanism {
  title: string;
  principle?: string;
  implementation?: string;
  trigger?: string;
  failure_condition?: string;
  automated_refinement_cycle?: string;
}

export interface ECO_Protocol_Blueprint {
  Protocol_Name: string;
  The_Blend_Emergent_Structure: string;
  Mechanism_1_Surrogate_Reasoning: Mechanism;
  Mechanism_2_Antifragility_Injection: Mechanism;
  Testing_Hypothesis: string;
  Epistemic_Flow_Metric: string[];
}
