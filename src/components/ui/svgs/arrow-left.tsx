import { HTMLAttributes } from 'react'

type Props = {
	stroke?: string
} & HTMLAttributes<HTMLSpanElement>

export const ArrowLeft: React.FC<Props> = ({ stroke = 'black', ...props }) => {
	return (
		<span {...props}>
			<svg
				width='20'
				height='20'
				viewBox='0 0 24 24'
				fill='none'
				color='currentColor'
				xmlns='http://www.w3.org/2000/svg'
				stroke={stroke}
			>
				<path
					d='M11 5L4 12L11 19M4 12H20'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</span>
	)
}
