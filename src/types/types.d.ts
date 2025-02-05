type ServiceButtonType = {
	icon: 'delivery' | 'customer-service' | 'secure'
	title: string
	description: string
}

type CategoryIcon = 'cellPhone' | 'pc' | 'smartWatch' | 'camera' | 'headPhones' | 'gamepad'

type Category = {
	title: string
	icon: CategoryIcon
}

type AnimatedRoundIcon = 'delivery' | 'customer-service' | 'secure'

type Navigation = {
	name: string
	slug: string
	child?: boolean
}

type FooterNavigation = {
	section: string
	child: FooterNavigationChild[]
}

type FooterNavigationChild = {
	name: string
	slug: string
	isExternal: boolean
}
