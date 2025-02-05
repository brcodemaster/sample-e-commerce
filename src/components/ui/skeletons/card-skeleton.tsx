import Image from 'next/image'

import placeholder from '../../../../public/img-placeholder.webp'

export const CardSkeleton: React.FC = () => {
	return (
		<div className='max-w-[270px] max-h-[322px]'>
			<div className='w-full h-[250px] bg-secondary flex justify-center items-center relative group overflow-hidden animate-pulse'>
				<Image src={placeholder} alt='Placeholder image' className='w-full h-full object-cover' />
			</div>
			<div className='w-[150px] h-[28px] block bg-[#dcdcdc] animate-pulse mt-2' />
			<div className='w-[170px] h-[28px] block bg-[#dcdcdc] animate-pulse mt-2' />
		</div>
	)
}
