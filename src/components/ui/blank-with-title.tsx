import { Timer } from './timer'
import { Title } from './title'

type Props = {
	blank: string
	title: string
	isHaveTime?: boolean
}

export const BlankWithTitle: React.FC<Props> = ({ blank, title, isHaveTime = false }) => {
	return (
		<div className='flex items-end shrink-0'>
			<div className='flex flex-col'>
				<div className='flex items-center text-base font-semibold text-red-500'>
					<div className='bg-red-500 w-[20px] h-[40px] rounded-sm mr-4' /> {blank}
				</div>
				<Title size='lg' className='pt-5'>
					{title}
				</Title>
			</div>
			{isHaveTime && <Timer />}
		</div>
	)
}
