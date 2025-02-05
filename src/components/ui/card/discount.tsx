type Props = {
	discount: number
}

export const Discount: React.FC<Props> = ({ discount }) => {
	return (
		<div className='px-3 py-1 text-xs bg-red-500 absolute top-3 left-3 text-accent rounded-sm'>
			-{discount}%
		</div>
	)
}
