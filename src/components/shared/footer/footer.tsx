import { Container } from '@/components/ui'

import { FooterNavigation } from './footer-navigation'
import { Exclusive } from './exclusive'
import { DownloadApp } from './download-app'
import { Copyright } from './copyright'

export const Footer: React.FC = () => {
	return (
		<footer className='bg-primary flex flex-col'>
			<Container className='text-accent flex justify-between items-center w-full py-[70px]'>
				<Exclusive />
				<FooterNavigation />
				<DownloadApp />
			</Container>
			<Copyright />
		</footer>
	)
}
