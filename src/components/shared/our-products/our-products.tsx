import { prisma } from '@/prisma/prisma-client'
import { BlankWithTitle, Button, Card, Container, Section } from '../../ui'
import { Colors, Products } from '@prisma/client'

export type ProductsWithColor = {
	colors: Colors[]
} & Products

export const OurProducts: React.FC = async () => {
	const products: ProductsWithColor[] =
		(await prisma.products.findMany({
			include: {
				colors: true,
			},
			take: 8,
		})) || []

	await new Promise(resolve =>
		setTimeout(() => {
			resolve(1)
		}, 3000)
	)

	return (
		<Section>
			<Container className='flex flex-col gap-5'>
				<BlankWithTitle blank='Our Profits' title='Explore Our Products' />
				<div className='grid grid-cols-4 gap-y-[60px] pt-14'>
					{products.length > 0 &&
						products.map(product => (
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
				<div className='flex  justify-center items-center pt-14'>
					<Button className='px-[48px] py-4'>View All Products</Button>
				</div>
			</Container>
		</Section>
	)
}
