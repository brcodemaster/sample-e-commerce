type Props = {
	oldPrice: number
	currentPrice: number
}

export const Price: React.FC<Props> = ({ oldPrice, currentPrice }) => {
	return oldPrice ? (
		<div className='text-red-500 font-medium flex items-center gap-3'>
			{currentPrice}$
			{oldPrice > 2 && (
				<span className='text-primary/50 font-medium line-through'>${oldPrice}</span>
			)}
		</div>
	) : (
		<div className='text-red-500 font-medium'>{currentPrice}$</div>
	)
}
