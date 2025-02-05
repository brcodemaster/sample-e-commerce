import { Send, Title } from '@/components/ui'

export const Exclusive: React.FC = () => {
	return (
		<div>
			<div className='flex flex-col gap-6'>
				<Title>Exclusive</Title>
				<p className='text-xl text-accent'>Subscribe</p>
				<p>Get 10% off your first order</p>
			</div>
			<div className='relative w-fit mt-4'>
				<input
					type='text'
					name='email'
					className='border border-accent bg-primary outline-none px-4 py-3 placeholder:opacity-70 max-w-[217px]'
					placeholder='Enter your email'
					autoComplete='off'
				/>
				<Send className='absolute top-1/2 -translate-y-1/2 right-4' />
			</div>
		</div>
	)
}
