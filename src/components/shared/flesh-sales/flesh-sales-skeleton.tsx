import { ArrowLeft, BlankWithTitle, Button, Container } from '@/components/ui'
import { CardSkeleton } from '@/components/ui/skeletons'

export const FleshSalesSkeleton: React.FC = () => {
	return (
		<Container className='pt-16'>
			<div className='flex items-end'>
				<BlankWithTitle blank="Today's" title='Flesh Sales' isHaveTime />
				<div className='w-full flex justify-end items-end gap-2'>
					<Button className='p-3 rounded-full bg-[#dcdcdc] hover:bg-white'>
						<ArrowLeft />
					</Button>
					<Button className='p-3 rounded-full bg-[#dcdcdc] hover:bg-white rotate-180'>
						<ArrowLeft />
					</Button>
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
