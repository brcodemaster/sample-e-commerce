import Image from 'next/image'
import { BlankWithTitle, Container, Section } from '../ui'
import { Link } from '@/i18n/routing'

export const Featured: React.FC = () => {
	return (
		<Section>
			<Container className='flex flex-col gap-5'>
				<BlankWithTitle blank='Featured' title='New Arrival' />
				<div className='grid grid-cols-[570px_auto_auto] grid-rows-2 w-full gap-2'>
					<div className='bg-black col-start-1 col-end-1 row-span-2 p-7 relative w-[570px]'>
						<Image
							src='/ps.webp'
							alt='Playstation'
							width={511}
							height={511}
							className='w-[511px] h-[511px] object-contain'
						/>
						<div className='absolute bottom-7 left-7'>
							<h4 className='text-2xl font-semibold text-accent'>Playstation</h4>
							<p className='text-accent'>Black and White version of the PS5 coming out on sale.</p>
							<Link href='/' className='underline hover:no-underline text-accent'>
								Shop now
							</Link>
						</div>
					</div>
					<div className='bg-[#0d0d0d] col-start-2 col-end-4 relative flex justify-end items-center grid-cols-[570px_auto_auto] max-h-[284px]'>
						<Image src='/woman.webp' alt='Woman' width={432} height={286} />
						<div className='absolute bottom-7 left-7'>
							<h4 className='text-2xl font-semibold text-accent'>Women’s Collections</h4>
							<p className='text-accent'>Featured woman collections that give you another vibe.</p>
							<Link href='/' className='underline hover:no-underline text-accent'>
								Shop now
							</Link>
						</div>
					</div>
					<div className='bg-black col-start-2 col-end-2 relative grid-cols-[270px_auto_auto] flex justify-center items-center'>
						<div className='w-[100px] h-[100px] rounded-full shadow-[0_0_200px_10px_white] absolute top-1/2 -translate-y-1/2 order-2 bg-transparent' />
						<Image src='/echo.webp' alt='Echo' width={210} height={222} className='order-1 z-10' />
						<div className='absolute bottom-7 left-7 z-20'>
							<h4 className='text-2xl font-semibold text-accent'>Speakers</h4>
							<p className='text-accent'>Amazon wireless speakers</p>
							<Link href='/' className='underline hover:no-underline text-accent'>
								Shop now
							</Link>
						</div>
					</div>
					<div className='bg-black col-start-3 col-end-4 relative grid-cols-[270px_auto_auto] flex justify-center items-center'>
						<div className='w-[100px] h-[100px] rounded-full shadow-[0_0_200px_10px_white] absolute top-1/2 -translate-y-1/2 order-2 bg-transparent' />
						<Image
							src='/gucci.webp'
							alt='Echo'
							layout='intrinsic'
							width={210}
							height={222}
							className='order-1 z-10'
						/>
						<div className='absolute bottom-7 left-7 z-20'>
							<h4 className='text-2xl font-semibold text-accent'>Perfume</h4>
							<p className='text-accent'>GUCCI INTENSE OUD EDP</p>
							<Link href='/' className='underline hover:no-underline text-accent'>
								Shop now
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}
