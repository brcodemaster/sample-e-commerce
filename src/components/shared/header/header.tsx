import { Container, Logo } from '@/components/ui'
import { Navigation } from './navigation'
import { SearchButton } from './search-button'

export const Header: React.FC = () => {
	return (
		<header className='pt-10 border-b border-b-slate-300/70 pb-4'>
			<Container className='flex justify-between items-center gap-3'>
				<Logo />
				<Navigation />
				<SearchButton />
			</Container>
		</header>
	)
}
