import { BlankWithTitle, Container } from '@/components/ui'
import { CardSkeleton } from '@/components/ui/skeletons'

export const OurProductsSkeleton: React.FC = () => {
	return (
		<Container className='flex flex-col gap-5 pt-16'>
			<BlankWithTitle blank='Our Profits' title='Explore Our Products' />
			<div className='grid grid-cols-4 gap-y-[60px] pt-16'>
				{Array.from({ length: 8 }, (_, ind) => (
					<CardSkeleton key={ind} />
				))}
			</div>
			<div className='flex  justify-center items-center mt-14 px-[48px] w-[100px] bg-[#dcdcdc] animate-pulse' />
		</Container>
	)
}
