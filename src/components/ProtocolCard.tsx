import React from 'react';

/**
 * Properties for the ProtocolCard component.
 *
 * @property {string} title - The main heading displayed on the card.
 * @property {React.ReactNode} icon - An SVG icon rendered next to the title.
 * @property {React.ReactNode} content - The body content describing the protocol element.
 * @property {string} [className] - Optional additional CSS classes for styling.
 */
interface ProtocolCardProps {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

/**
 * A styled card component used to display ECO Protocol elements like features,
 * agent blueprints, and lexicon patterns in a uniform grid layout.
 *
 * @param {ProtocolCardProps} props - The component properties.
 * @returns {React.ReactElement} The rendered card component.
 */
export const ProtocolCard: React.FC<ProtocolCardProps> = ({ title, icon, content, className = '' }) => {
  return (
    <div className={`bg-brand-surface rounded-lg p-6 border border-brand-border hover:border-brand-accent/50 transition-colors ${className}`}>
      <div className="flex items-center mb-4 text-brand-accent">
        {icon}
        <h3 className="ml-3 text-xl font-bold text-brand-text-primary tracking-tight">{title}</h3>
      </div>
      <div className="text-brand-text-secondary leading-relaxed space-y-4">
        {content}
      </div>
    </div>
  );
};
