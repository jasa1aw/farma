'use client';
import { useState, useEffect } from 'react';
import { questions as originalQuestions, shuffleArray } from '@/data/questions';
import QuizGame from '@/components/QuizGame';

export default function GamePage() {
  const [questions, setQuestions] = useState(originalQuestions);

  useEffect(() => {
    setQuestions(shuffleArray(originalQuestions));
  }, []);

  return <QuizGame questions={questions} />;
}
