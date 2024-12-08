'use client'
import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { addPoints } from '@/store/slices/pointSlice'
import QuestionDisplay from '@/components/QuestionDisplay'
import AnswerButtons from '@/components/AnswerButtons'

interface Question {
	id: number;
	question: string;
	answers: { text: string; correct: boolean }[];
  }
  
  interface QuizGameProps {
	questions: Question[];
  }
  

export default function QuizGame({ questions }: QuizGameProps) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [selected, setSelected] = useState(false)
	const [reset, setReset] = useState(false);
	const points = useAppSelector((state) => state.points.points)
	const dispatch = useAppDispatch()

	const handleAnswer = (correct: boolean, id: number) => {
		setSelected(true)
		console.log(id);
		
		if (correct) {
			dispatch(addPoints(1))
		}
	}

	const nextQuestion = () => {
		setSelected(false);
		setReset(true); // Trigger reset
		setTimeout(() => setReset(false), 0); // Reset the reset state
	
		if (currentQuestionIndex < questions.length - 1) {
		  setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	  };

	const currentQuestion = questions[currentQuestionIndex]

	return (
		<div className="quiz-game w-full h-full flex flex-col" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
			<header className='flex items-center justify-between'>
				<h1>Quiz Game</h1>
				<span>{currentQuestionIndex + 1}/{questions.length}</span>
				<span>Points: {points}</span>
			</header>
			<QuestionDisplay
				question={currentQuestion.question}
				current={currentQuestionIndex + 1}
				total={questions.length}
			/>
			<AnswerButtons
				answers={currentQuestion.answers}
				onAnswer={handleAnswer}
				selected={selected}
				reset={reset}
			/>
			{selected && (
				<button onClick={nextQuestion} style={{ marginTop: '20px', padding: '10px 20px' }}>
					{currentQuestionIndex === questions.length - 1 ? 'Ойын аяқталды' : 'Келесі сұрақ'}
				</button>
			)}
			{currentQuestionIndex === questions.length - 1 && selected && (
				<div style={{ marginTop: '20px' }}>
					<h2>Ойын аяқталды</h2>
					<p>You scored {points} out of {questions.length}!</p>
				</div>
			)}
		</div>
	)
}
