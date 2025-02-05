import { Facebook, Instagram, Linkedin, Title, Twitter } from '@/components/ui'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

import { footerSocials } from '../../../../db/db'

import qrCode from '../../../../public/qr-code.png'
import appStore from '../../../../public/app-store.png'
import googlePlay from '../../../../public/google-play.png'

const iconMap = {
	facebook: <Facebook />,
	twitter: <Twitter />,
	instagram: <Instagram />,
	linkedin: <Linkedin />,
}

export const DownloadApp: React.FC = () => {
	return (
		<div className='flex-shrink-0'>
			<div className='flex flex-col gap-6'>
				<Title>Download App</Title>
				<p className='text-xs text-accent/50'>Save $3 with App New User Only</p>
			</div>
			<div className='relative w-fit mt-4 flex gap-2'>
				<Image src={qrCode} alt='qr code' />
				<div className='flex flex-col justify-between'>
					<Link href='https://www.apple.com/app-store/'>
						<Image src={appStore} alt='qr code' />
					</Link>
					<Link href='https://play.google.com/'>
						<Image src={googlePlay} alt='qr code' />
					</Link>
				</div>
			</div>
			<div className='flex justify-between items-center pt-6'>
				{footerSocials &&
					footerSocials.map(social => (
						<a href={social.slug} key={social.name} target='_blank' rel='noopener noreferrer'>
							{iconMap[social.name as keyof typeof iconMap]}
						</a>
					))}
			</div>
		</div>
	)
}
