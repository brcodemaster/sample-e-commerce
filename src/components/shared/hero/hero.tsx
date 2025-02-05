import { Container, Section } from '@/components/ui'
import { HeroNavigation } from './hero-navigation'
import { SwiperBanner } from './swiper-banner'

export const Hero: React.FC = () => {
	return (
		<Section className='pt-0'>
			<Container className='flex items-center h-full'>
				<div className='w-[231px] h-full pr-4 border-r border-slate-300/70 pt-10 shrink-0'>
					<HeroNavigation />
				</div>
				<div className='w-full h-[384px] pt-10 px-11'>
					<SwiperBanner />
				</div>
			</Container>
		</Section>
	)
}
