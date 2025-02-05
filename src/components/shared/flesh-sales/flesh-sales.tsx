import { ArrowLeft, BlankWithTitle, Button, Card, Container, Section } from '@/components/ui'
import { prisma } from '@/prisma/prisma-client'

export const FleshSales: React.FC = async () => {
	const fleshSales = await prisma.products
		.findMany({
			where: {
				discount: {
					gte: 10,
				},
			},
			include: {
				colors: true,
			},
		})
		.finally(() => {
			prisma.$disconnect()
		})

	await new Promise(resolve => {
		setTimeout(() => {
			resolve(1)
		}, 300)
	})

	return (
		<Section>
			<Container>
				<div className='flex items-end'>
					<BlankWithTitle blank="Today's" title='Flesh Sales' isHaveTime />
					<div className='w-full flex justify-end items-end gap-2'>
						<Button className='p-3 rounded-full bg-[#dcdcdc] hover:bg-white'>
							<ArrowLeft />
						</Button>
						<Button className='p-3 rounded-full bg-[#dcdcdc] hover:bg-white rotate-180'>
							<ArrowLeft />
						</Button>
					</div>
				</div>
				<div className='grid grid-cols-4 gap-y-[60px] pt-14'>
					{fleshSales.length > 0 &&
						fleshSales.map(product => (
							<Card
								id={product.id}
								key={product.id}
								imgUrl={product.imgUrl}
								currentPrice={product.currentPrice}
								rating={product.rating}
								title={product.name}
								oldPrice={product.oldPrice}
								discount={product.discount}
								newness={product.newness}
								colors={product.colors}
							/>
						))}
				</div>
			</Container>
		</Section>
	)
}
