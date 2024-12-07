'use client'
import { useState, useEffect } from "react";
import {questions as originalQuestions, shuffleArray } from '@/data/questions';
import QuizGame from './game/page'
export default function Home() {
  const [questions, setQuestions] = useState(originalQuestions);

  useEffect(() => {
    // Shuffle questions on component mount
    setQuestions(shuffleArray(originalQuestions));
  }, []);
  return (
    <>
      <QuizGame questions={questions} />;
    </>
  )
}
