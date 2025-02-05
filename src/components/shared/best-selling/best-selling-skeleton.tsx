import { BlankWithTitle, Button, Container } from '@/components/ui'
import { CardSkeleton } from '@/components/ui/skeletons'

export const BestSellingSkeleton: React.FC = () => {
	return (
		<Container>
			<div className='flex items-end'>
				<BlankWithTitle blank='This Month' title='Best Selling Products' />
				<div className='w-full flex justify-end items-end'>
					<Button className='px-[48px] py-4'>View All</Button>
				</div>
			</div>
			<div className='grid grid-cols-4 gap-y-[60px] pt-14'>
				{Array.from({ length: 4 }, (_, ind) => (
					<CardSkeleton key={ind} />
				))}
			</div>
		</Container>
	)
}
