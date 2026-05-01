import React from 'react';

interface ProtocolCardProps {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

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
