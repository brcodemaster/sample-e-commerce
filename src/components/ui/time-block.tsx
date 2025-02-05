import { cn } from '@/lib/utils'

type Props = {
	title: string
	time: number
	lastBlock?: boolean
	isRoundedBlock?: boolean
}

export const TimeBlock: React.FC<Props> = ({
	title,
	time,
	lastBlock = false,
	isRoundedBlock = false,
}) => {
	return (
		<span
			className={cn(
				'flex flex-col text-xs font-medium',
				!lastBlock &&
					!isRoundedBlock &&
					'relative after:content-[":"] after:text-3xl after:text-red-500 after:absolute after:-right-4 after:bottom-2',
				isRoundedBlock &&
					'rounded-full bg-accent text-primary w-[62px] h-[62px] items-center justify-center'
			)}
		>
			<span className={cn(isRoundedBlock && 'text-[11px] order-2')}>{title}</span>
			<span className={cn('text-3xl font-bold', isRoundedBlock && 'text-sm font-semibold order-1')}>
				{time < 10 ? `0${time}` : time}
			</span>
		</span>
	)
}
