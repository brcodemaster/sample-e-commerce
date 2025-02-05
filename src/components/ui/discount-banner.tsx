import { Link } from '@/i18n/routing'
import { LocaleSwitcher } from './locale-switcher'
import { Container } from './container'

export const DiscountBanner: React.FC = () => {
	return (
		<div className='w-full h-[48px] bg-primary text-sm text-accent font-medium flex justify-end items-center gap-5'>
			<Container className='w-[1170px] flex justify-end items-center'>
				<div className='w-[859px] h-[24px] flex justify-between items-center gap-4'>
					<div className='flex items-center gap-2'>
						Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
						<Link href='/' className='underline hover:no-underline'>
							Shop now
						</Link>
					</div>
					<LocaleSwitcher />
				</div>
			</Container>
		</div>
	)
}
