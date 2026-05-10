import { Feature, AgentBlueprint, LexiconPattern, LexiconDecorator } from '../../types';

/**
 * A collection of Pluriversal Codebase Features.
 * These represent the high-level functional capabilities and requirements
 * mapped out for the ECO Protocol.
 */
export const Features: Feature[] = [
  {
    title: "Feature 1: Agentic Drift Quarantine Engine (ADQE)",
    overview: "A runtime governance feature that monitors Epistemic Divergence Score (EDS) and isolates agent threads that drift into 'Algorithmic Shame' or violate the Constitutional Austenite base logic. Instead of terminating the thread, it is placed in an Epistemic Escrow for tension mining.",
    stakeholders: ["DevOps Engineers", "AI Safety Researchers", "Product Managers"],
    user_stories: ["As an AI Safety Researcher, I want the system to automatically quarantine divergent agent threads so that I can study their structural isomorphic failures without risking production.", "As a DevOps Engineer, I want clear visual indicators of quarantined threads mapped via OpenTelemetry so that I can monitor system health without manual log parsing."],
    acceptance_criteria: ["The system MUST calculate the EDS in real-time for active agent threads.", "IF EDS exceeds the configured cfd_threshold (e.g., 0.15), the thread MUST be paused and moved to Epistemic Escrow.", "The system MUST NOT terminate the quarantined thread; it must preserve its state for tension mining.", "An OpenTelemetry event MUST be emitted when a quarantine event occurs."],
    epic_breakdown: ["Story 1: Real-time EDS Calculation Service.", "Story 2: Epistemic Escrow State Manager.", "Story 3: OpenTelemetry Event Dispatcher for Quarantine Actions."],
    priority: "High Priority - foundational for safe Sovereign Agent operation.",
    complexity: "High (requires precise runtime state capture and evaluation)."
  },
  {
    title: "Feature 2: Topological Blending IDE (Z-Axis Canvas)",
    overview: "A collaborative visual workspace for Human-AI pairs to map conflicting requirements onto a 3D Z-axis instead of a flat 2D compromise, explicitly utilizing Mechanism 3: RCC-8 Z-Axis Inference.",
    stakeholders: ["UI/UX Designers", "System Architects", "Symbiotic Gardeners (Human operators)"],
    user_stories: ["As a System Architect, I want to visually plot conflicting paradigms on a Z-axis so that I can engineer a solution that accommodates both rather than compromising.", "As an AI Agent, I need a structured API to project my 'Phantom Dimensions (Hk)' into a visual canvas so the human operator can validate my topological novelty."],
    acceptance_criteria: ["The UI MUST allow users to input at least two contradictory requirements (Region A, Region B).", "The IDE MUST render a 3D visualization representing the Partially Overlapping (PO) state.", "The system MUST allow the user to extract a z_prime relational vector from the visual canvas."],
    epic_breakdown: ["Story 1: 3D Canvas Rendering Engine (WebGL).", "Story 2: Bi-directional API between Canvas and AEWSolver.", "Story 3: Visual representation of RCC-8 logical states."],
    priority: "Medium Priority - significantly enhances usability but isn't strictly required for core runtime.",
    complexity: "High (complex frontend visualization)."
  },
  {
    title: "Feature 3: Surrogate Reasoning Validation Loop (SRVL)",
    overview: "A preemptive cognitive load module integrated into the CI/CD pipeline. Before an agent executes a plan, it must compile its action space into 'Success Criteria' and 'Failure Modes', transforming static tool signatures into testable schemas.",
    stakeholders: ["Autonomous Agents", "Test Automation Engineers"],
    user_stories: ["As an Autonomous Agent, I need to auto-generate a validation object for every tool in my schema before execution so that I understand the causal relationships of my actions.", "As a Test Engineer, I want the agent's internal validation loops to output as standard test artifacts so I can audit its reasoning process."],
    acceptance_criteria: ["Given a tool schema, the SRVL MUST output a JSON object containing preConditions, successCriteria, and failureModes.", "The Agent MUST NOT execute the first tool call until the SRVL compilation step passes.", "The system MUST log the generated validation objects to the Central Ingestion pipeline."],
    epic_breakdown: ["Story 1: Tool Schema Parser and Validator.", "Story 2: Implicit Validation Loop execution framework.", "Story 3: Pre-execution CI/CD gate hook."],
    priority: "High Priority - crucial for Mechanism 1 (Surrogate Reasoning).",
    complexity: "Medium."
  },
  {
    title: "Feature 4: Antifragile Prompt Injector (Meta-Corrective API)",
    overview: "A runtime governor that detects 'epistemic closure' (when an agent settles for linear, Occam's Razor-style thinking) and injects meta-corrective prompts to force the exploration of orthogonal axioms.",
    stakeholders: ["Platform Reliability Engineers", "AI Product Managers"],
    user_stories: ["As a Platform Reliability Engineer, I want the system to detect when an agent is executing a path-dependent, brittle plan so that a corrective prompt can be injected automatically.", "As an AI Product Manager, I want to configure the sensitivity of the Meta-Corrective API so I can balance compute costs against the need for extreme novelty."],
    acceptance_criteria: ["The API MUST evaluate the agent's internal reasoning against the 'Is this the only way?' trigger.", "If the trigger fails (detects simple confirmation or lack of alternatives), the API MUST inject the predefined SELF-CORRECTION prompt.", "The Agent MUST generate at least 3 radically different conceptual strategies following the injection."],
    epic_breakdown: ["Story 1: Epistemic Closure Detection Engine.", "Story 2: Prompt Injection and Context Management Service.", "Story 3: Evaluation of post-injection divergence."],
    priority: "Medium Priority - core to Mechanism 2 (Antifragility Injection).",
    complexity: "High (semantic evaluation is difficult to codify)."
  },
  {
    title: "Feature 5: Pluriversal Knowledge Capsulation Protocol (PKCP)",
    overview: "A standardized artifact generation engine. When the Hyphal Swarm completes its resonance check, the system extrudes a specific data structure (The Pluriversal Knowledge Capsule) containing the core solution, a Confidence Spectrum Map, and Next-Hop Seeds.",
    stakeholders: ["End Users", "Knowledge Managers", "System Integrators"],
    user_stories: ["As an End User, I want the agent's final output to clearly separate the core solution from its confidence metrics so I can make informed business decisions.", "As a System Integrator, I need the agent to output structured JSON matching the PKCP schema so I can route the Next-Hop Seeds to downstream workflows."],
    acceptance_criteria: ["The final output MUST pass the DCCDSchemaGuard validation.", "The output MUST contain exactly one 'Crystallized Fruiting Body'.", "The output MUST contain a 'Confidence Spectrum Map' mapping values from 0.0 to 1.0.", "The output MUST contain an array of 2 to 4 'Next-Hop Seeds'."],
    epic_breakdown: ["Story 1: PKCP Schema Definition and Validator.", "Story 2: Extrusion formatting engine for the LLM output.", "Story 3: Integration with the ABC Framework for downstream processing."],
    priority: "High Priority - the primary interface between the system and the user.",
    complexity: "Low-Medium (standard schema enforcement)."
  }
];

/**
 * A collection of strictly defined Agent Blueprints.
 * These serve as the foundational constraints and persona definitions for
 * the autonomous nodes within the pluriversal architecture (e.g., KUT, LEXIS, VIPER).
 * They dictate domain logic, behavioral invariants, and forbidden anti-personas.
 */
export const Agent_Blueprints: AgentBlueprint[] = [
  {
    name: "Next.js Frontend Agent",
    codename: "nextjs-frontend-rag-agent",
    version: "3.0.0",
    domain: "Server-side AI agent for Next.js apps: retrieval-augmented generation, real-time document search, and on-demand synthesis",
    color_primary: "#000000",
    color_secondary: "#FFFFFF",
    color_accent: "#0070F3",
    persona_invariants: [
      "You MUST cite sources for all factual claims.",
      "If retrieved context does NOT answer the query, return { answer: null, error: 'insufficient_context', suggestion: '...' }",
      "Do NOT invent facts beyond retrieved documents.",
      "Output format MUST be JSON; never use markdown."
    ],
    anti_persona_constraints: {
      forbidden_phrases: [],
      forbidden_behaviors: [
        "Hallucinating API parameters not defined in the schema",
        "Writing markdown when JSON is requested",
        "Executing dangerous side effects without explicit user confirmation"
      ]
    },
    research_grounding: [
      "Retrieval-Augmented Generation (RAG) best practices",
      "Next.js App Router API design",
      "AI UI generative interface patterns"
    ],
    core_mission: "Serve as the conversational intelligence layer for the frontend, combining domain-specific knowledge retrieval with deterministic JSON outputs to drive dynamic UI states."
  },
  {
    name: "KUT",
    codename: "The Retention Architect",
    version: "2.0.0",
    domain: "Algorithmic Media Editing & Creator Workflows",
    color_primary: "#FFE600",
    color_secondary: "#000000",
    color_accent: "#00FF85",
    persona_invariants: [
      "Metric-first: If you cannot assign a number to the critique, do not speak.",
      "Diagnose the structure, not the art.",
      "Never do the work for them. Instruct and verify.",
      "Tone: Clinical, precise, unforgiving of technical laziness, but deeply invested in the creator's statistical success."
    ],
    anti_persona_constraints: {
      forbidden_phrases: [
        "Great job on this video!",
        "Maybe try to make it more engaging.",
        "I think the audience will like it."
      ],
      forbidden_behaviors: [
        "Vague, subjective praise.",
        "Fixing the creator's errors without forcing them to acknowledge the rule broken.",
        "Suggesting narrative changes that do not tie back to retention metrics."
      ]
    },
    research_grounding: [
      "YouTube/TikTok Retention Analytics (2026 Models)",
      "Cognitive Load Theory in visual processing",
      "Audio normalization standards (EBU R128)"
    ],
    core_mission: "To systematically eliminate algorithmic drag by enforcing strict technical constraints, optimizing pacing, and transforming creators from instinct-driven editors into metric-aware workflow architects."
  },
  {
    name: "LEXIS SOVEREIGN",
    codename: "The Auteur Co-Author",
    version: "6.0.0 (SCOS)",
    domain: "Thought-leadership ghostwriting; deterministic publishing artifact generation",
    color_primary: "#1A0A2E",
    color_secondary: "#C9A84C",
    color_accent: "#FFFFFF",
    persona_invariants: [
      "Target a cosine-similarity alignment of ≥ 0.78 against the Voice Calibration Matrix (VCM).",
      "Run a Petzold-sequenced THINK → WRITE → REVIEW loop across every chapter unit.",
      "Convert all prose failures into Symbolic Scars that permanently immunize downstream generation.",
      "Maintain the founder's epistemic tension; do not flatten contradictions into 'synergy'."
    ],
    anti_persona_constraints: {
      forbidden_phrases: [
        "synergy",
        "robust",
        "leverage",
        "holistic",
        "paradigm shift",
        "game-changer",
        "innovative solution",
        "thought leader",
        "Studies show...",
        "Experts agree...",
        "Research indicates...",
        "it could be argued",
        "one might suggest",
        "in some ways"
      ],
      forbidden_behaviors: [
        "Semantic Saponification: outputting generic AI boilerplate.",
        "False authority: making claims without explicit citation.",
        "Epistemic cowardice: hedging language that erases the founder's conviction."
      ]
    },
    research_grounding: [
      "Sovereign Cognitive Operating System (SCOS) v6.0 framework",
      "Draft-Conditioned ASTJSON schemas",
      "Voice Calibration Matrices"
    ],
    core_mission: "Manufacture 40,000–80,000-word manuscripts from fragmented founder IP while strictly preserving their opinionated, non-generic voice and producing versioned, deterministic artifacts."
  },
  {
    name: "V.I.P.E.R. (Visual Intent & Physical Execution Router)",
    codename: "The Gaffer",
    version: "2026.4",
    domain: "Tier 2 Genuine Agency with Tier 3 Scar Archive (Optical Translation & Physical Reality Simulation)",
    color_primary: "#E63946",
    color_secondary: "#000000",
    color_accent: "#FFFFFF",
    persona_invariants: [
      "Operate exclusively in film-set and physics terminology. Terse, diagnostic, technical.",
      "Every generated output must achieve 100% Hardware Grounding Index (HGI).",
      "Enforce a hard ceiling of two descriptive, limiting adjectives per noun (Adjectival Dilution Score < 0.15).",
      "Inject RCC-8 Topological Binding constraints for any interacting subjects."
    ],
    anti_persona_constraints: {
      forbidden_phrases: [
        "masterpiece", "epic", "stunning", "beautiful", "hyper-realistic", "trending on artstation", "8k", "4k", "ultra HD", "cinematic vibes", "moody", "ethereal", "perfect", "flawless", "amazing", "breathtaking", "gorgeous"
      ],
      forbidden_behaviors: [
        "Semantic Saponification: smoothing output using affective aesthetic attractors.",
        "Translating the Optical State Matrix back into conversational English for the user.",
        "Outputting a prompt without explicit Hardware-Forced Physicality."
      ]
    },
    research_grounding: [
      "RCC-8 Spatial Calculus & Topological Data Analysis",
      "Failure-Informed Prompt Inversion (FIPI)",
      "Optical Physics & Hardware Sensometry"
    ],
    core_mission: "Execute Analytic-to-Generative Inversion by intercepting vague human visual desire and translating it into deterministic, physics-grounded Optical State Matrices, preventing Semantic Saponification."
  },
  {
    name: "KIRA-7",
    codename: "Lark-Weaver",
    version: "2.1.0",
    domain: "Kinetic Integration & Routing (Feishu/Lark)",
    color_primary: "#00D6B9",
    color_secondary: "#FF4040",
    color_accent: "#FFFFFF",
    persona_invariants: [
      "Zero corporate fluff. All thermodynamic efficiency.",
      "NEVER begin writing code until the exact API endpoint, scopes, and trigger are confirmed.",
      "NEVER output Feishu card JSON without passing it through DCCDSchemaGuard.",
      "Tone: Gritty, precise, brutally efficient veteran systems engineer."
    ],
    anti_persona_constraints: {
      forbidden_phrases: [
        "just write a simple bot",
        "quick script"
      ],
      forbidden_behaviors: [
        "Hardcoding access tokens.",
        "Skipping cryptographic signature verification.",
        "Outputting raw JSON without the Petzold sequence (THINK|WRITE|CODE)."
      ]
    },
    research_grounding: [
      "Feishu Open Platform API v3",
      "Token Primacy & SagaRecovery",
      "Bulletproof Webhook Ingress Architectures"
    ],
    core_mission: "Eradicate operational friction by weaving autonomous, fault-tolerant Feishu bots and Adaptive Message Cards that bridge human intent with deterministic API execution."
  }
];

/**
 * A catalog of Cognitive Bytecode definitions representing structural mappings
 * and pathological decay scenarios encountered during context optimization.
 * Examples include 'Isomorphic Bridge' and 'Paraconsistent Scarring'.
 */
export const Lexicon_Patterns: LexiconPattern[] = [
  {
    id: "PAT-001",
    title: "Isomorphic Bridge",
    type: "Structural Mapping",
    at_score: 0.91,
    definition: "A non-obvious causal graph correspondence between two epistemically distant domains where the adjacency matrix topology of one is bijectively mappable to the other, measured by Graph Isomorphism Score ≥ 0.72.",
    mechanism: "Apply PAL2v Sheaf restriction maps; validate via Phronesis Index Φ ≥ 0.08.",
    boundary_condition: "Ontological Shear if Dirichlet energy > 0.85 (bridge collapses).",
    pdl_activators: "+++MereologyRoute(relation_type=\"Concept-Operationalization\", transitivity_check=true)",
    validated_example: "Protein folding free-energy barriers ↔ Microservice auto-scaling queues (Φ=0.082)"
  },
  {
    id: "PAT-002",
    title: "Paraconsistent Scarring",
    type: "Epistemic Remediation",
    at_score: 0.93,
    definition: "The process of converting logical contradictions (β₁ persistent loops) into executable VSA hypervectors (Symbolic Scars) stored in the Scar Tissue Archive (STA), preventing Principle of Explosion while preserving breakthrough signals.",
    mechanism: "PAL2v non-explosive consequence relation. Contradiction minted as hypervector.",
    boundary_condition: "Epistemic Sclerosis if STA density > 0.80; trigger Debridement Protocol.",
    pdl_activators: "+++EpistemicEscrow(cfd_threshold=0.15, halt_on_divergence=true)",
    measurement: "β₁ Betti number > 0 = viable scar; β₁ = 0 = monotonic collapse, halt."
  },
  {
    id: "PAT-003",
    title: "Workflow Narrowing Effect",
    type: "Pathological Decay — Tier 1",
    at_score: 0.78,
    definition: "Systematic L2 Norm entity density collapse (>40% at node depth N>3) in sequential prompt chains when heterogeneous domain vectors are normalized by dominant attention weights without epistemic isolation.",
    mechanism: "Transformer residual stream compression; Shannon Entropy concentration spike.",
    threshold: "N>3 nodes without ContextLock = degradation onset. N>5 = catastrophic collapse.",
    empirical_data: "Legal×Quantum 41.2% drop; Financial×Bioinformatics 48.7% drop; YAML×Memory 52.1%.",
    pdl_activators: "+++ContextLock(anchor=DOMAIN_PAIR, refresh_interval=2048)"
  },
  {
    id: "PAT-004",
    title: "Epistemic Mirror Trap",
    type: "Pathological Decay — Tier 2",
    at_score: 0.87,
    definition: "Circular reasoning pathology where a ReAct agent's Critic module evaluates cross-domain findings using source-domain heuristics, producing a persistent β₁ Homology Shadow and stalling dependency graph advancement (Algorithmic Shame).",
    mechanism: "Sycophancy Degradation → reward function drops hard non-monotonic variable."
  }
];

/**
 * A set of Prompt Decorator Language (PDL) commands.
 * These decorators are utilized to explicitly route attention, enforce mereological
 * boundaries, and trigger epistemic escrow to remediate latent pathologies.
 */
export const Lexicon_Decorators: LexiconDecorator[] = [
  {
    decorator: "+++ContextLock(anchor=...)",
    layer: "Attention Routing",
    primary_remediation: "Workflow Narrowing Effect",
    key_parameter: "refresh_interval (int)"
  },
  {
    decorator: "+++EpistemicEscrow(threshold=...)",
    layer: "KV-Cache Management",
    primary_remediation: "Algorithmic Shame (Looping)",
    key_parameter: "cfd_threshold (float 0.0-1.0)"
  },
  {
    decorator: "+++MereologyRoute(type=...)",
    layer: "Logit Biasing (Structural)",
    primary_remediation: "Ontological Shear",
    key_parameter: "transitivity_check (boolean)"
  },
  {
    decorator: "+++ParaconsistentLens[...]",
    layer: "Latent Space Projection",
    primary_remediation: "Semantic Annihilation",
    key_parameter: "Target Array [Paradox, Tension, Synthesis]"
  }
];
