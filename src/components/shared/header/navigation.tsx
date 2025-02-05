'use client'

import { Link, usePathname } from '@/i18n/routing'
import { navigation } from '../../../../db/db'
import { cn } from '@/lib/utils'

export const Navigation: React.FC = () => {
	const path = usePathname()

	const activePath = '/' + path.split('/').splice(1, 1)[0]

	return (
		<nav>
			<ul className='flex items-center gap-12'>
				{navigation &&
					navigation.map(nav => (
						<li
							key={nav.name}
							className={cn(
								`custom-underline group hover:text-black`,
								activePath === nav.slug
									? 'font-bold after:opacity-100 after:visible after:w-full'
									: 'font-medium text-gray-primary'
							)}
						>
							<Link
								href={nav.slug}
								data-text={nav.name}
								className='no-shifting py-1 group-hover:font-bold'
							>
								{nav.name}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	)
}
