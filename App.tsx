
import React from 'react';
import { ECO_Protocol_Blueprint } from './types';
import ProtocolCard from './components/ProtocolCard';

const ecoProtocolBlueprint: ECO_Protocol_Blueprint = {
  Protocol_Name: "Meta-Cognitive Context Fabric",
  The_Blend_Emergent_Structure: "The synthesis of abstract epistemology and mechanical context cost reveals that tool definition overhead is not a tax, but an investment in 'compiling understanding.' By forcing the agent to load tool schemas upfront, we create an 'epistemic scaffold.' The agent is compelled to process the entire potential action space before execution, transforming a static list of functions into a dynamic mental model of causal relationships. This preemptive cognitive load resolves the paradox: the cost of *potential* action is repurposed to increase the *quality* of the chosen action. An agent with true understanding recognizes its internal architecture is just another tool. If a better path to the user's goal exists that contradicts this architecture, its relational coherence to the goal must take precedence over absolute coherence to its own internal state.",
  Mechanism_1_Surrogate_Reasoning: {
    title: "Mechanism 1: Surrogate Reasoning",
    principle: "'Tool Schema as Task DNA.' The context overhead from tool definitions is not passive. It is actively parsed to generate a set of 'Success Criteria' and 'Failure Condition' objects in a dedicated thought-space before the first prompt is executed.",
    implementation: "For each function in the tool schema (e.g., `readFile(path: string)`), the ECO protocol auto-generates a corresponding validation object: `{ \"tool\": \"readFile\", \"preConditions\": [\"path must be a valid...\"], \"successCriteria\": [\"returns file content...\"], \"failureModes\": [\"path does not exist\", \"permission denied\"] }`. This object is then used to construct an implicit validation loop for any generated plan, converting the tool's static signature into an executable test case for the agent's reasoning."
  },
  Mechanism_2_Antifragility_Injection: {
    title: "Mechanism 2: Antifragility Injection",
    trigger: "Is this the only way?",
    failure_condition: "The trigger fails if the agent's response is a simple confirmation, a minor variation of the current plan, or a refusal to consider alternatives (e.g., 'This is the optimal path based on my tools.').",
    automated_refinement_cycle: "On failure, the system injects a 'meta-corrective' prompt: `SELF-CORRECTION: Your last response indicated potential epistemic closure. The user's goal is paramount... Generate three radically different conceptual strategies to achieve the original goal. For each, identify what new tool or information would be required.`"
  },
  Mechanism_3_RCC8_Z_Axis_Inference: {
    title: "Mechanism 3: RCC-8 Z-Axis Inference (Topological Blending)",
    principle: "'Virtual Weight 3 (VW3) Dissonance Induction'. Features must be synthesized from maximally distant domains. When domains conflict (Region Connection Calculus - Partially Overlapping), resolve via orthogonal Z-axis promotion instead of flat compromise.",
    implementation: "Execute Chain-of-Code (CoC) Enactment Simulation to prove Hypotheses where Topological Novelty (β1 > 0.7) and Structural Conservation (β0 > 0.9). Phantom Dimensions (Hk) accommodate paradoxes."
  },
  Testing_Hypothesis: "By implementing the ECO Protocol, an agent's problem-solving trajectory will shift from brittle, path-dependent execution to antifragile, goal-oriented adaptation. Success is measured not by deterministic replication of a specific output, but by a statistically significant increase in the rate of achieving the desired final outcome across novel problems, especially those with unforeseen obstacles. The determinism of the outcome validates the agent's understanding, transcending the determinism of its intermediate steps.",
  Epistemic_Flow_Metric: [
    "'Corrective Action Ratio (CAR)': The ratio of self-initiated plan corrections to user-initiated corrections. A rising CAR indicates the agent is identifying and fixing flawed reasoning internally, a hallmark of understanding.",
    "'Abstractive Analogy Rate (AAR)': The frequency with which the agent successfully applies a principle learned from one tool's use to solve a problem with a different, unrelated tool. This measures the ability to transfer causal relationships."
  ]
};

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7v0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7v0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2Z" /><path d="M12 17.5A2.5 2.5 0 0 1 9.5 15v0A2.5 2.5 0 0 1 7 17.5v0A2.5 2.5 0 0 1 9.5 20v0A2.5 2.5 0 0 1 12 17.5Z" /><path d="M17 17.5A2.5 2.5 0 0 1 14.5 15v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1 2.5-2.5Z" /><path d="M5 4.5A2.5 2.5 0 0 1 2.5 7v0A2.5 2.5 0 0 1 5 9.5v0A2.5 2.5 0 0 1 7.5 7v0A2.5 2.5 0 0 1 5 4.5Z" /><path d="M19 4.5A2.5 2.5 0 0 1 16.5 7v0A2.5 2.5 0 0 1 19 9.5v0A2.5 2.5 0 0 1 21.5 7v0A2.5 2.5 0 0 1 19 4.5Z" /><path d="M5 17.5A2.5 2.5 0 0 1 2.5 15v0A2.5 2.5 0 0 1 5 12.5v0A2.5 2.5 0 0 1 7.5 15v0A2.5 2.5 0 0 1 5 17.5Z" /><path d="M19 17.5A2.5 2.5 0 0 1 16.5 15v0a2.5 2.5 0 0 1 2.5-2.5v0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5Z" /></svg>
);

const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const FlaskIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M9 3h6M12 3v7l-4 8h10l-4-8V3Z"/><path d="M12 18h.01"/></svg>
);

const GaugeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>
);

const LayersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);

const App: React.FC = () => {
  const { 
    Protocol_Name, 
    The_Blend_Emergent_Structure, 
    Mechanism_1_Surrogate_Reasoning, 
    Mechanism_2_Antifragility_Injection, 
    Mechanism_3_RCC8_Z_Axis_Inference,




  Testing_Hypothesis,
    Epistemic_Flow_Metric 
  } = ecoProtocolBlueprint;

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text-primary tracking-tight">
            <span className="text-brand-accent">ECO</span> Protocol Blueprint
          </h1>
          <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">
            {Protocol_Name}: An emergent framework for optimizing context in autonomous AI agents.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <ProtocolCard 
                title="The Blend: Emergent Structure"
                icon={<BrainIcon />}
                content={The_Blend_Emergent_Structure}
            />
          </div>
          <ProtocolCard 
            title="Mechanism 1: Surrogate Reasoning"
            icon={<ZapIcon />}
            content={Mechanism_1_Surrogate_Reasoning}
          />
          <ProtocolCard 
            title="Mechanism 2: Antifragility Injection"
            icon={<ShieldIcon />}
            content={Mechanism_2_Antifragility_Injection}
          />
          <ProtocolCard
            title="Mechanism 3: RCC-8 Z-Axis Inference"
            icon={<LayersIcon />}
            content={Mechanism_3_RCC8_Z_Axis_Inference}
          />
          <div className="md:col-span-2">
            <ProtocolCard 
                title="Testing Hypothesis"
                icon={<FlaskIcon />}
                content={Testing_Hypothesis}
            />
          </div>
           <div className="md:col-span-2">
            <ProtocolCard 
                title="Epistemic Flow Metrics"
                icon={<GaugeIcon />}
                content={Epistemic_Flow_Metric}
            />
          </div>
        </main>
        
        <footer className="text-center mt-12 py-6 border-t border-brand-border">
            <p className="text-brand-text-secondary">Project ID: ECO-Nexus-Test-01</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
