
import React from 'react';
import { Mechanism } from '../types';

interface ProtocolCardProps {
  title: string;
  icon: React.ReactNode;
  content: string | string[] | Mechanism | React.ReactNode;
}

const renderContent = (content: string | string[] | Mechanism | React.ReactNode) => {
  if (typeof content === 'string') {
    return <p className="text-brand-text-secondary leading-relaxed">{content}</p>;
  }

  if (Array.isArray(content)) {
    return (
      <ul className="space-y-4">
        {content.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-brand-text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (React.isValidElement(content)) {
    return content;
  }

  if (typeof content === 'object' && content !== null) {
    const { principle, implementation, trigger, failure_condition, automated_refinement_cycle } = content;
    return (
        <div className="space-y-4">
            {principle && (
                <div>
                    <h4 className="font-semibold text-brand-text-primary">Principle</h4>
                    <p className="text-brand-text-secondary mt-1">{principle}</p>
                </div>
            )}
            {implementation && (
                <div>
                    <h4 className="font-semibold text-brand-text-primary">Implementation</h4>
                    <p className="text-brand-text-secondary mt-1">{implementation}</p>
                </div>
            )}
            {trigger && (
                <div>
                    <h4 className="font-semibold text-brand-text-primary">Trigger</h4>
                    <p className="text-brand-text-secondary mt-1 font-mono bg-brand-bg p-2 rounded-md">{trigger}</p>
                </div>
            )}
            {failure_condition && (
                <div>
                    <h4 className="font-semibold text-brand-text-primary">Failure Condition</h4>
                    <p className="text-brand-text-secondary mt-1">{failure_condition}</p>
                </div>
            )}
            {automated_refinement_cycle && (
                <div>
                    <h4 className="font-semibold text-brand-text-primary">Automated Refinement Cycle</h4>
                    <p className="text-brand-text-secondary mt-1">{automated_refinement_cycle}</p>
                </div>
            )}
        </div>
    );
  }

  return null;
};


const ProtocolCard: React.FC<ProtocolCardProps> = ({ title, icon, content }) => {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-6 shadow-lg hover:shadow-brand-accent/20 transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-brand-accent/10 rounded-full mr-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-text-primary">{title}</h3>
      </div>
      {renderContent(content)}
    </div>
  );
};

export default ProtocolCard;
