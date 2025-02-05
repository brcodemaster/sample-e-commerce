import { Link } from '@/i18n/routing'
import { heroNavigation } from '../../../../db/db'
import { ArrowRight } from '@/components/ui'

export const HeroNavigation: React.FC = () => {
	return (
		<nav>
			<ul className='flex flex-col gap-4'>
				{heroNavigation &&
					heroNavigation.map(nav => (
						<Link
							href={nav.slug}
							className='flex items-center justify-between cursor-pointer w-full'
							key={nav.name}
						>
							<li className='flex justify-between items-center w-full'>
								{nav.name}
								{nav.child && <ArrowRight />}
							</li>
						</Link>
					))}
			</ul>
		</nav>
	)
}
