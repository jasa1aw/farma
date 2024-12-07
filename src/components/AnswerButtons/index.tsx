'use client'
import { motion } from "motion/react"
import React, { useState, useEffect } from "react"

interface Answer {
	text: string
	correct: boolean
}

interface AnswerButtonsProps {
	answers: Answer[]
	onAnswer: (correct: boolean, id: number) => void
	selected: boolean
	reset: boolean
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({ answers, onAnswer, selected, reset }) => {
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
	const [finalColors, setFinalColors] = useState<{ [key: number]: string }>({})
	const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>([])

	// Fisher-Yates shuffle algorithm to mix answers randomly
	const shuffleAnswers = (arr: Answer[]): Answer[] => {
		const shuffled = [...arr] // Create a copy of the array to avoid mutating the original
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]] // Swap elements
		}
		return shuffled
	}

	useEffect(() => {
		if (reset) {
			setSelectedAnswer(null)
			setFinalColors({})
		}
		// Shuffle answers whenever the component mounts or reset changes
		setShuffledAnswers(shuffleAnswers(answers))
	}, [reset, answers])

	const handleClick = (answer: Answer, idx: number) => {
		setSelectedAnswer(idx)
		setTimeout(() => {
			setFinalColors((prev) => ({
				...prev,
				[idx]: answer.correct ? "button-green" : "button-red",
			}))
			shuffledAnswers.forEach((ans, index) => {
				if (ans.correct && index !== idx) {
					setFinalColors((prev) => ({ ...prev, [index]: "button-green" }))
				}
			})
			onAnswer(answer.correct, idx)
		}, 500)
	}

	return (
		<div className="answers-wrapper w-full flex flex-col mt-5 gap-[10px]" >
			{shuffledAnswers.map((answer, idx) => (
				<motion.button
					key={idx}
					disabled={selected}
					className={
						finalColors[idx] || (selected && idx === selectedAnswer ? "button-fill" : "")
					}
					onClick={() => handleClick(answer, idx)}
					style={{
						width: '100%',
						height: '100%',
						borderRadius: '10px',
						padding: "10px 20px",
						border: "1px solid #ddd",
						cursor: selected ? "not-allowed" : "pointer",
						transition: "background-color 0.3s ease, color 0.3s ease",
					}}
				>
					{answer.text}
				</motion.button>
			))}
		</div>
	)
}

export default AnswerButtons
