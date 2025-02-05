'use client'

import { useEffect, useState } from 'react'
import { TimeBlock } from './time-block'
import { cn } from '@/lib/utils'

type Props = {
	isRoundedBlocks?: boolean
}

export const Timer: React.FC<Props> = ({ isRoundedBlocks = false }) => {
	const [targetTime] = useState(() => Date.now() + (((3 * 24 + 20) * 60 + 19) * 60 + 56) * 1000)

	const calculateTimeLeft = () => {
		const now = Date.now()
		const difference = targetTime - now

		if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / (1000 * 60)) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		}
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)

		return () => clearInterval(timer)
	}, [timeLeft])

	return (
		<div className={cn('flex items-center gap-7 pl-[87px]', isRoundedBlocks && 'pl-0')}>
			<TimeBlock title='Days' time={timeLeft.days} isRoundedBlock={isRoundedBlocks} />
			<TimeBlock title='Hours' time={timeLeft.hours} isRoundedBlock={isRoundedBlocks} />
			<TimeBlock title='Minutes' time={timeLeft.minutes} isRoundedBlock={isRoundedBlocks} />
			<TimeBlock
				title='Seconds'
				time={timeLeft.seconds}
				lastBlock
				isRoundedBlock={isRoundedBlocks}
			/>
		</div>
	)
}
