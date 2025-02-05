import Image from 'next/image'
import { Favorite, View } from '../svgs'
import { Title } from '../title'
import { Button } from '../buttons'
import { cn } from '@/lib/utils'
import { Colors } from '@prisma/client'
import { Newness } from './newness'
import { Discount } from './discount'
import { Price } from './price'
import { Rating } from './rating'
import { CardColors } from './card-colors'

type Props = {
	id: number
	imgUrl: string
	title: string
	newness: boolean
	colors: Colors[]
	oldPrice: number
	discount: number
	currentPrice: number
	rating: number
}

export const Card: React.FC<Props> = ({
	id,
	newness,
	colors,
	oldPrice,
	discount,
	imgUrl,
	title,
	currentPrice,
	rating,
}) => {
	return (
		<div className='max-w-[270px] max-h-[350px]'>
			<div className='w-full h-[250px] bg-secondary flex justify-center items-center relative group overflow-hidden'>
				{newness && <Newness />}
				{discount > 0 && <Discount discount={discount} />}
				<Image
					src={`/${imgUrl}`}
					alt='Product image'
					width={190}
					height={180}
					className='w-[190px] h-[180px] object-contain'
				/>
				<div className='absolute right-3 top-3 flex flex-col gap-3'>
					<Button variant={'rounded'}>
						<View />
					</Button>
					<Button variant={'rounded'}>
						<Favorite />
					</Button>
				</div>
				<Button
					variant='secondary'
					className='absolute -bottom-10 left-0 right-0  group-hover:bottom-0 delay-100 group-hover:delay-0'
				>
					Add To Cart
				</Button>
			</div>
			<div>
				<Title size='sm' className='text-base font-semibold text-primary pt-4'>
					{title}
				</Title>
				<div
					className={cn(
						'flex items-center gap-2 pt-3',
						oldPrice && 'flex-col justify-start items-start'
					)}
				>
					<Price oldPrice={oldPrice} currentPrice={currentPrice} />
					<Rating rating={rating} />
				</div>
			</div>
			<CardColors colors={colors} index={id} />
		</div>
	)
}
