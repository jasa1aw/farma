'use client'
import { motion } from "motion/react"
import React from 'react'

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
	const progress = (current / total) * 100

	return (
		<div className="progress-bar-wrapper w-full flex items-center justify-between" style={{ height: '10px', background: '#e0e0e0' }}>
			<motion.div
				className="progress-bar"
				style={{width: '100%', height: '100%', background: '#4caf50' }}
				initial={{ width: 0 }}
				animate={{ width: `${progress}%` }}
				transition={{ duration: 0.5 }}
			/>	
			{/* <span className='ml-[10px]'>{current}/{total}</span> */}
		</div>
	)
}

export default ProgressBar