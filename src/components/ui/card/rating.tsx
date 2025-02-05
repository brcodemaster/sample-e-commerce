import { Star } from '../svgs'

type Props = {
	rating: number
}

export const Rating: React.FC<Props> = ({ rating }) => {
	return (
		<span className='flex items-center gap-2'>
			<span className='flex items-center'>
				<Star />
				<Star />
				<Star />
				<Star />
				<Star />
			</span>
			<span className='font-bold text-primary/50'>({rating})</span>
		</span>
	)
}
