import { BlankWithTitle, Button, Card, Container, Section } from '@/components/ui'
import { prisma } from '@/prisma/prisma-client'
import { ProductsWithColor } from '../our-products/our-products'

export const BestSelling: React.FC = async () => {
	const bestSellingProducts: ProductsWithColor[] = await prisma.products.findMany({
		where: {
			ordered: {
				gte: 10,
			},
		},
		include: {
			colors: true,
		},
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
					<BlankWithTitle blank='This Month' title='Best Selling Products' />
					<div className='w-full flex justify-end items-end'>
						<Button className='px-[48px] py-4'>View All</Button>
					</div>
				</div>
				<div className='grid grid-cols-4 gap-y-[60px] pt-14'>
					{bestSellingProducts.length > 0 &&
						bestSellingProducts.map(product => (
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
