import { CustomerService, Delivery, Secure } from './svgs'

export type Props = {
	icon: AnimatedRoundIcon
}

export const AnimatedRound: React.FC<Props> = ({ icon }) => {
	return (
		<div className='bg-primary w-[58px] h-[58px] rounded-full relative'>
			<div className='bg-primary w-fit rounded-full p-5 absolute top-[9px] left-[9px] animate-ping' />
			{icon === 'delivery' ? (
				<Delivery className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
			) : icon === 'customer-service' ? (
				<CustomerService className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
			) : (
				<Secure className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
			)}
		</div>
	)
}
