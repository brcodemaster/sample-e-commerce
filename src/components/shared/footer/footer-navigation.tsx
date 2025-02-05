import { Link } from '@/i18n/routing'
import { footerNavigation } from '../../../../db/db'
import { Title } from '@/components/ui'

export const FooterNavigation: React.FC = () => {
	return (
		<nav>
			<ul className='flex justify-between gap-20'>
				{footerNavigation &&
					footerNavigation.map(nav => (
						<li key={nav.section}>
							<Title size='sm'>{nav.section}</Title>
							<div className='flex flex-col gap-y-2 pt-6 max-w-[175px]'>
								{nav.child.map(children => {
									if (children.isExternal) {
										return (
											<a
												key={children.name}
												href={children.slug}
												target='_blank'
												rel='noopener noreferrer'
												className='text-base font-normal'
											>
												{children.name}
											</a>
										)
									}

									return (
										<Link
											href={children.slug}
											className='text-base font-normal'
											key={children.name}
										>
											{children.name}
										</Link>
									)
								})}
							</div>
						</li>
					))}
			</ul>
		</nav>
	)
}
