// TreatmentStepCard component
import React from 'react';

export default function TreatmentStepCard({ 
  step, 
  title, 
  children 
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-lgsoft rounded-3xl p-8">
      <h3 className="flex items-start gap-3 text-xl font-semibold text-slate-800">
        <span className="mr-2 text-accent font-bold">{step}.</span>{title}
      </h3>
      <p className="text-slate-600 mt-2">{children}</p>
    </div>
  );
}