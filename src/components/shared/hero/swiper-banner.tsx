'use client'

import { ArrowLeft, Title } from '@/components/ui'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Mousewheel } from 'swiper/modules'
export const SwiperBanner: React.FC = () => {
	return (
		<Swiper
			modules={[Autoplay, Mousewheel]}
			className='bg-black w-[892px]'
			loop={false}
			slidesPerView={1}
			direction='horizontal'
			mousewheel={{ forceToAxis: true }}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
		>
			{Array.from({ length: 5 }, (_, ind) => (
				<SwiperSlide
					key={ind}
					draggable
					className='w-full h-[344px] flex justify-between items-center bg-black py-[69px] px-[56px]'
				>
					<div className='w-1/2 h-full flex flex-col justify-between items-start'>
						<div className='flex items-center gap-3'>
							<Image
								src='/apple-logo.webp'
								alt='Apple logo'
								width={40}
								height={49}
								priority
								className='w-[40px] h-[49px] object-cover'
							/>
							<h5 className='font-semibold text-accent'>iPhone 14 Series</h5>
						</div>
						<Title className='w-full text-balance' size='xl'>
							Up to 10% off Voucher
						</Title>
						<Link
							href='/'
							className='underline hover:no-underline flex items-center gap-2 text-accent'
						>
							Shop now
							<span className='rotate-180'>
								<ArrowLeft stroke='white' />
							</span>
						</Link>
					</div>
					<Image
						src='/iphone.webp'
						alt='Boom box'
						width={300}
						height={300}
						priority
						className='w-[300px] h-[300px] object-cover'
					/>
				</SwiperSlide>
			))}
			{/* <div className='flex items-center gap-3 absolute bottom-3 left-1/2 -translate-x-1/2 z-10'>
				<span className='w-[12px] h-[12px] bg-gray-600 rounded-full' />
				<span className='w-[12px] h-[12px] bg-gray-600 rounded-full' />
				<span className='w-[12px] h-[12px] bg-gray-600 rounded-full' />
				<span className='w-[12px] h-[12px] bg-gray-600 rounded-full' />
				<span className='w-[12px] h-[12px] bg-gray-600 rounded-full' />
			</div> */}
		</Swiper>
	)
}

// ;<div className='w-full h-[344px] bg-black flex justify-between items-center py-[69px] px-[56px]'>
// 	<div className='w-1/2 h-full flex flex-col justify-between items-start'>
// 		<h5 className='font-semibold text-accent'>iPhone 14 Series</h5>
// 		<Title className='w-full text-balance' size='xl'>
// 			Up to 10% off Voucher
// 		</Title>
// 		<Link href='/' className='underline hover:no-underline flex items-center gap-2 text-accent'>
// 			Shop now
// 			<span className='rotate-180'>
// 				<ArrowLeft stroke='white' />
// 			</span>
// 		</Link>
// 	</div>
// 	<Image
// 		src='/iphone.webp'
// 		alt='Boom box'
// 		width={450}
// 		height={300}
// 		className='w-[450px] h-[300px] object-contain'
// 	/>
// </div>
