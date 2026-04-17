export interface Mechanism {
  title: string;
  principle?: string;
  implementation?: string;
  trigger?: string;
  failure_condition?: string;
  automated_refinement_cycle?: string;
}

export interface Feature {
  title: string;
  overview: string;
  stakeholders?: string[];
  user_stories?: string[];
  acceptance_criteria?: string[];
  epic_breakdown?: string[];
  priority?: string;
  complexity?: string;
}

export interface AgentBlueprint {
  name: string;
  codename: string;
  version: string;
  domain: string;
  color_primary: string;
  color_secondary: string;
  color_accent: string;
  persona_invariants: string[];
  anti_persona_constraints: {
    forbidden_phrases: string[];
    forbidden_behaviors: string[];
  };
  research_grounding: string[];
  core_mission: string;
}

export interface ECO_Protocol_Blueprint {
  Protocol_Name: string;
  The_Blend_Emergent_Structure: string;
  Mechanism_1_Surrogate_Reasoning: Mechanism;
  Mechanism_2_Antifragility_Injection: Mechanism;
  Mechanism_3_RCC8_Z_Axis_Inference: Mechanism;
  Testing_Hypothesis: string;
  Epistemic_Flow_Metric: string[];
  Features?: Feature[];
  Agent_Blueprints?: AgentBlueprint[];
}
