'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import EstimatorForm from './EstimatorForm';
import EstimatorResults from './EstimatorResults';
import Section from '../ui/Section';
import Spinner from '../ui/Spinner';

export default function ProjectEstimator() {
  const [estimate, setEstimate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async (answers) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/estimator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to generate estimate');
      }

      const data = await response.json();
      setEstimate(data);
      toast.success('Estimate generated successfully!');
    } catch (error) {
      console.error('Estimation error:', error);
      toast.error(error.message || 'Error generating estimate. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setEstimate(null);
  };

  if (isLoading) {
    return (
      <Section className="pt-24">
        <div className="text-center">
          <Spinner size="lg" className="mx-auto" />
          <p className="mt-4 text-muted-foreground">Analyzing your project...</p>
        </div>
      </Section>
    );
  }

  if (estimate) {
    return (
      <Section className="pt-24">
        <EstimatorResults estimate={estimate} />
        <div className="text-center mt-8">
          <button
            onClick={handleReset}
            className="text-primary hover:underline"
          >
            Start Over
          </button>
        </div>
      </Section>
    );
  }

  return (
    <Section className="pt-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Project Estimator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Answer a few questions about your project, and we'll provide an instant estimate 
          for timeline and budget.
        </p>
      </div>
      <EstimatorForm onComplete={handleComplete} />
    </Section>
  );
}

