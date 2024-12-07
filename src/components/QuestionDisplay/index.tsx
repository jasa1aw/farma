// QuestionDisplay.tsx
'use client'
import React from 'react';
import ProgressBar from '@/components/ProgressBar';

const QuestionDisplay: React.FC<{ question: string; current: number; total: number }> = ({ question, current, total }) => {
  return (
    <div className="question-display">
      <ProgressBar current={current} total={total} />
      <h2 style={{ marginTop: '20px' }}>{question}</h2>
    </div>
  );
};

export default QuestionDisplay;