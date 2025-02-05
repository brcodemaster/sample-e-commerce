import {
	Banner,
	BestSelling,
	BestSellingSkeleton,
	Categories,
	Featured,
	FleshSales,
	FleshSalesSkeleton,
	Hero,
	OurProducts,
	ServiceButtons,
} from '@/components/shared'
import { OurProductsSkeleton } from '@/components/shared/our-products/our-products-skeleton'
import { Suspense } from 'react'

export default function Page() {
	return (
		<>
			<Hero />
			<Suspense fallback={<FleshSalesSkeleton />}>
				<FleshSales />
			</Suspense>
			<Categories />
			<Suspense fallback={<BestSellingSkeleton />}>
				<BestSelling />
			</Suspense>
			<Banner />
			<Suspense fallback={<OurProductsSkeleton />}>
				<OurProducts />
			</Suspense>
			<Featured />
			<ServiceButtons />
		</>
	)
}
