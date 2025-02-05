import Image from 'next/image'
import { Button, Container, Section, Timer, Title } from '../ui'

export const Banner: React.FC = () => {
	return (
		<Section>
			<Container>
				<div className='w-full h-[500px] bg-black flex items-center py-[69px] px-[56px]'>
					<div className='w-1/2 h-full flex flex-col justify-between items-start'>
						<h5 className='font-semibold text-green-500'>Categories</h5>
						<Title className='w-full text-balance' size='xl'>
							Enhance Your Music Experience
						</Title>
						<Timer isRoundedBlocks />
						<Button className='bg-green-400 px-[48px] hover:bg-green-500 rounded-sm'>
							Buy Now!
						</Button>
					</div>
					<div className='w-[600px] h-[422px] flex justify-center items-center relative'>
						<div className='w-[300px] h-[300px] rounded-full shadow-[0_0_200px_rgba(255,255,255,1)] absolute top-1/2 -translate-y-1/2 order-1 bg-[#414141]' />
						<Image
							src='/boom-box.webp'
							alt='Boom box'
							width={568}
							height={320}
							className='w-[568px] h-[320px] object-contain absolute top-1/2 -translate-y-1/2 order-2'
						/>
					</div>
				</div>
			</Container>
		</Section>
	)
}
