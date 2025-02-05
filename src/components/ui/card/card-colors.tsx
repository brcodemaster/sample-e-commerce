import { Colors } from '@prisma/client'

type Props = {
	colors: Colors[]
	index: number
}

export const CardColors: React.FC<Props> = ({ colors, index }) => {
	return (
		colors.length > 0 && (
			<div className='flex items-center gap-2 pt-2'>
				<input type='radio' name={`color-${index}`} className='w-[20px] h-[20px]' />
				<input type='radio' name={`color-${index}`} className='w-[20px] h-[20px]' defaultChecked />
			</div>
		)
	)
}
