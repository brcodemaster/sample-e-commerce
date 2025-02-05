import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import '../globals.css'
import { Footer, Header } from '@/components/shared'
import { DiscountBanner } from '@/components/ui'
import 'swiper/css'
import 'swiper/css/pagination'

const inter = Inter({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['cyrillic'],
})

export const metadata: Metadata = {
	title: 'E-commerce',
	description: 'E-commerce online shop',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params

	if (!routing.locales.includes(locale as 'ru' | 'en')) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<DiscountBanner />
					<Header />
					<main>{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
