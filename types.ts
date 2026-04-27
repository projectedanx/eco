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

export interface LexiconPattern {
  id: string;
  title: string;
  type: string;
  at_score: number;
  definition: string;
  mechanism: string;
  pdl_activators?: string;
  boundary_condition?: string;
  validated_example?: string;
  threshold?: string;
  empirical_data?: string;
  signature?: string;
  latency_signature?: string;
  detection?: string;
  negative_control?: string;
  optimal_zone?: string;
  mitigation?: string;
  validation?: string;
  crdt_integration?: string;
  fast_path?: string;
  full_audit?: string;
  category_theory?: string;
  measurement?: string;
}

export interface LexiconDecorator {
  decorator: string;
  layer: string;
  primary_remediation: string;
  key_parameter: string;
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
  Lexicon_Patterns?: LexiconPattern[];
  Lexicon_Decorators?: LexiconDecorator[];
}
