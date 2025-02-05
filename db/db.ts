export const navigation: Navigation[] = [
	{
		name: 'Home',
		slug: '/',
	},
	{
		name: 'Contact',
		slug: '/contact',
	},
	{
		name: 'About',
		slug: '/about',
	},
	{
		name: 'Sign Up',
		slug: '/sign-up',
	},
]

export const footerNavigation: FooterNavigation[] = [
	{
		section: 'Support',
		child: [
			{
				name: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh',
				slug: 'https://www.google.com/maps',
				isExternal: true,
			},
			{
				name: 'exclusive@gmail.com',
				slug: 'mailto:exclusive@gmail.com',
				isExternal: true,
			},
			{
				name: '+88015-88888-9999',
				slug: 'tel:+88015888889999',
				isExternal: true,
			},
		],
	},
	{
		section: 'Account',
		child: [
			{
				name: 'My account',
				slug: '/profile',
				isExternal: false,
			},
			{
				name: 'Login / Register',
				slug: '/login',
				isExternal: false,
			},
			{
				name: 'Cart',
				slug: '/cart',
				isExternal: false,
			},
			{
				name: 'Wishlist',
				slug: '/wishlist',
				isExternal: false,
			},
			{
				name: 'Shop',
				slug: '/home',
				isExternal: false,
			},
		],
	},
	{
		section: 'Quick link',
		child: [
			{
				name: 'Privacy Policy',
				slug: '/privacy-policy',
				isExternal: false,
			},
			{
				name: 'Terms Of Use',
				slug: '/terms-of-use',
				isExternal: false,
			},
			{
				name: 'FAQ',
				slug: '/faq',
				isExternal: false,
			},
			{
				name: 'Contact',
				slug: '/contact',
				isExternal: false,
			},
		],
	},
]

export const footerSocials: Navigation[] = [
	{
		name: 'facebook',
		slug: 'https://www.facebook.com/',
	},
	{
		name: 'twitter',
		slug: 'https://www.twitter.com/',
	},
	{
		name: 'instagram',
		slug: 'https://www.instagram.com/',
	},
	{
		name: 'linkedin',
		slug: 'https://www.linkedin.com/',
	},
]

export const heroNavigation: Navigation[] = [
	{
		name: 'Woman’s Fashion',
		slug: 'womans-fashion',
		child: true,
	},
	{
		name: 'Men’s Fashion',
		slug: 'mens-fashion',
		child: true,
	},
	{
		name: 'Electronics',
		slug: 'electronics',
		child: false,
	},
	{
		name: 'Home & Lifestyle',
		slug: 'home-lifestyle',
		child: false,
	},
	{
		name: 'Medicine',
		slug: 'medicine',
		child: false,
	},
	{
		name: 'Sports & Outdoor',
		slug: 'sports-outdoor',
		child: false,
	},
	{
		name: 'Baby’s & Toys',
		slug: 'baby-toys',
		child: false,
	},
	{
		name: 'Groceries & Pets',
		slug: 'groceries-pets',
		child: false,
	},
	{
		name: 'Health & Beauty',
		slug: 'health-beauty',
		child: false,
	},
]

export const serviceButtons: ServiceButtonType[] = [
	{
		icon: 'delivery',
		title: 'FREE AND FAST DELIVERY',
		description: 'Free delivery for all orders over $140',
	},
	{
		icon: 'customer-service',
		title: '24/7 CUSTOMER SERVICE',
		description: 'Friendly 24/7 customer support',
	},
	{
		icon: 'secure',
		title: 'MONEY BACK GUARANTEE',
		description: 'We return money within 30 days',
	},
]

export const categories: Category[] = [
	{
		title: 'Phones',
		icon: 'cellPhone',
	},
	{
		title: 'Computers',
		icon: 'pc',
	},
	{
		title: 'Smartwatch',
		icon: 'smartWatch',
	},
	{
		title: 'Camera',
		icon: 'camera',
	},
	{
		title: 'Headphones',
		icon: 'headPhones',
	},
	{
		title: 'Gaming',
		icon: 'gamepad',
	},
]
