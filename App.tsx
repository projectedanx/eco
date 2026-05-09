import React from 'react';
import { ProtocolCard } from './src/components/ProtocolCard';
import { TopologicalExtrusionMatrix } from './src/components/TopologicalExtrusionMatrix';
import { Features, Agent_Blueprints, Lexicon_Patterns, Lexicon_Decorators } from './src/data/epistemicMatrix';

/**
 * Renders an SVG icon representing a database or persistent storage layer.
 * @returns {React.ReactElement} The SVG component.
 */
const DatabaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

/**
 * Renders an SVG icon representing architectural layers or protocol features.
 * @returns {React.ReactElement} The SVG component.
 */
const LayersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

/**
 * Renders an SVG icon representing a user or an autonomous agent persona.
 * @returns {React.ReactElement} The SVG component.
 */
const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

/**
 * Renders an SVG icon representing documentation, lexicons, or cognitive patterns.
 * @returns {React.ReactElement} The SVG component.
 */
const BookIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

/**
 * The root Application component for the ECO Protocol Blueprint interface.
 * It renders the main layout, mapping over features, agent blueprints, and lexicon
 * patterns to dynamically construct the dashboard using ProtocolCard components.
 * It also embeds the strict TopologicalExtrusionMatrix for schema enforcement visualization.
 *
 * @returns {React.ReactElement} The fully constructed dashboard UI.
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 border-b border-brand-border pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text-primary mb-4">
            ECO Protocol Blueprint
          </h1>
          <p className="text-xl text-brand-text-secondary max-w-3xl leading-relaxed">
            Epistemic Context Optimizer (ECO) Protocol: Inversion for Emergence
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Features && Features.length > 0 && (
            <div className="md:col-span-2 mt-8">
              <h2 className="text-3xl font-bold text-brand-text-primary mb-6 border-b border-brand-border pb-2">Pluriversal Codebase Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Features.map((feature, idx) => (
                  <ProtocolCard
                    key={idx}
                    title={feature.title}
                    icon={<LayersIcon />}
                    content={
                      <div className="space-y-4">
                        <p className="text-brand-text-secondary leading-relaxed">{feature.overview}</p>
                        {feature.priority && (
                          <div>
                            <span className="font-semibold text-brand-text-primary">Priority: </span>
                            <span className="text-brand-text-secondary">{feature.priority}</span>
                          </div>
                        )}
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
          )}

          <TopologicalExtrusionMatrix />

          {Agent_Blueprints && Agent_Blueprints.length > 0 && (
            <div className="md:col-span-2 mt-8">
              <h2 className="text-3xl font-bold text-brand-text-primary mb-6 border-b border-brand-border pb-2">Sovereign Agents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Agent_Blueprints.map((agent, idx) => (
                  <ProtocolCard
                    key={idx}
                    title={agent.name + " (" + agent.codename + ")"}
                    icon={<UserIcon />}
                    content={
                      <div className="space-y-4">
                        <div>
                          <span className="font-semibold text-brand-text-primary">Domain: </span>
                          <span className="text-brand-text-secondary">{agent.domain}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-text-primary">Core Mission</h4>
                          <p className="text-brand-text-secondary leading-relaxed">{agent.core_mission}</p>
                        </div>
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {Lexicon_Patterns && Lexicon_Patterns.length > 0 && (
            <div className="md:col-span-2 mt-8">
              <h2 className="text-3xl font-bold text-brand-text-primary mb-6 border-b border-brand-border pb-2">Lexicon Patterns (Cognitive Bytecode)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Lexicon_Patterns.map((pattern, idx) => (
                  <ProtocolCard
                    key={idx}
                    title={`${pattern.id} · ${pattern.title}`}
                    icon={<BookIcon />}
                    content={
                      <div className="space-y-4">
                        <div>
                          <span className="font-semibold text-brand-text-primary">Type: </span>
                          <span className="text-brand-text-secondary">{pattern.type} (AT: {pattern.at_score})</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-text-primary">Definition</h4>
                          <p className="text-brand-text-secondary leading-relaxed">{pattern.definition}</p>
                        </div>
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </main>
        
        <footer className="text-center mt-12 py-6 border-t border-brand-border">
            <p className="text-brand-text-secondary">Project ID: ECO-Nexus-Test-01</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
