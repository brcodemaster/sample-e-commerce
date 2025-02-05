import { Camera, Cellphone, Gamepad, Headphone, Pc, Smartwatch } from './svgs'

const iconMap = {
	cellPhone: <Cellphone />,
	pc: <Pc />,
	smartWatch: <Smartwatch />,
	camera: <Camera />,
	headPhones: <Headphone />,
	gamepad: <Gamepad />,
}

type Props = {
	categoryIcon: CategoryIcon
	title: string
}

export const Category: React.FC<Props> = ({ categoryIcon, title }) => {
	return (
		<div className='w-[170px] h-[145px] border-[1px] border-black/30 hover:bg-red-500 rounded-sm flex flex-col justify-center items-center group cursor-pointer duration-200'>
			{iconMap[categoryIcon as keyof typeof iconMap]}
			<p className='pt-4 group-hover:text-accent'>{title}</p>
		</div>
	)
}
