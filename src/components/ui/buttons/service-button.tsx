import { AnimatedRound } from '../animated-round'
import { Title } from '../title'

type Props = {
	icon: AnimatedRoundIcon
	title: string
	description: string
}

export const ServiceButton: React.FC<Props> = ({ icon, description, title }) => {
	return (
		<div className='max-w-[2449px] flex flex-col justify-center items-center'>
			<AnimatedRound icon={icon} />
			<Title size='sm' className='text-primary pt-6'>
				{title}
			</Title>
			<p className='text-base pt-2'>{description}</p>
		</div>
	)
}
