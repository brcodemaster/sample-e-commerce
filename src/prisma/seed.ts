import { prisma } from './prisma-client'

async function up() {
	await prisma.products.createMany({
		data: [
			{
				name: 'Breed Dry Hot Food',
				imgUrl: 'dog.webp',
				currentPrice: 100,
			},
			{
				name: 'CANON EOS DSLR Camera',
				imgUrl: 'camera.webp',
				currentPrice: 360,
				rating: 95,
			},
			{
				name: 'ASUS FHD Gaming Laptop',
				imgUrl: 'notebook.webp',
				currentPrice: 700,
				rating: 325,
			},
			{
				name: 'Curology Product Set',
				imgUrl: 'shampoo.webp',
				currentPrice: 500,
				rating: 145,
			},
			{
				name: 'Kids Electric Car',
				imgUrl: 'car.webp',
				currentPrice: 960,
				rating: 65,
				newness: true,
			},
			{
				name: 'Jr. Zoom Soccer Cleats',
				imgUrl: 'sport.webp',
				currentPrice: 1160,
				rating: 35,
			},
			{
				name: 'GP11 Shooter USB Gamepad',
				imgUrl: 'gamepad.webp',
				currentPrice: 660,
				rating: 55,
				newness: true,
			},
			{
				name: 'Quilted Satin Jacket',
				imgUrl: 'jacket.webp',
				currentPrice: 660,
				rating: 55,
			},
			{
				name: 'The north coat',
				imgUrl: 'coat.webp',
				currentPrice: 260,
				oldPrice: 360,
				ordered: 10,
				rating: 65,
			},
			{
				name: 'Gucci duffle bag',
				imgUrl: 'bag.webp',
				currentPrice: 960,
				oldPrice: 1160,
				ordered: 10,
				rating: 65,
			},
			{
				name: 'RGB liquid CPU Cooler',
				imgUrl: 'cooler.webp',
				currentPrice: 160,
				oldPrice: 170,
				rating: 65,
				ordered: 10,
			},
			{
				name: 'Small BookSelf',
				imgUrl: 'book-self.webp',
				currentPrice: 360,
				oldPrice: 1,
				ordered: 10,
				rating: 65,
			},
			{
				name: 'HAVIT HV-G92 Gamepad',
				imgUrl: 'gamepad-red.webp',
				currentPrice: 120,
				oldPrice: 160,
				rating: 88,
				discount: 10,
			},
			{
				name: 'AK-900 Wired Keyboard',
				imgUrl: 'keyboard.webp',
				currentPrice: 960,
				oldPrice: 1,
				rating: 75,
				discount: 35,
			},
			{
				name: 'IPS LCD Gaming Monitor',
				imgUrl: 'monitor.webp',
				currentPrice: 370,
				oldPrice: 440,
				rating: 99,
				discount: 30,
			},
			{
				name: 'S-Series Comfort Chair ',
				imgUrl: 'chair.webp',
				currentPrice: 375,
				oldPrice: 400,
				rating: 99,
				discount: 25,
			},
		],
	})

	await prisma.colors.createMany({
		data: [
			{
				color: 'red',
				productsId: 5,
			},
			{
				color: 'red',
				productsId: 5,
			},
			{
				color: 'yellow',
				productsId: 6,
			},
			{
				color: 'red',
				productsId: 6,
			},
			{
				color: 'black',
				productsId: 7,
			},
			{
				color: 'red',
				productsId: 7,
			},
			{
				color: 'green',
				productsId: 8,
			},
			{
				color: 'red',
				productsId: 8,
			},
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "Products" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Colors" RESTART IDENTITY CASCADE;`
}

async function main() {
	try {
		await down()
		await up()

		console.log('Next step with: SUCCESS')
	} catch (error) {
		console.log('Next step with: FAIL' + error)
	}
}

main()
	.then(() => {
		console.log('Finish with: SUCCESS')
	})
	.catch(() => {
		console.log('Finish with: FAIL')
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
