import { categories } from '../../../db/db'
import { ArrowLeft, BlankWithTitle, Button, Category, Container, Section } from '../ui'

export const Categories: React.FC = () => {
	return (
		<Section>
			<Container>
				<div className='flex items-end'>
					<BlankWithTitle blank='Categories' title='Browse By Category' />
					<div className='w-full flex justify-end items-end gap-2'>
						<Button className='p-3 rounded-full bg-[#dcdcdc] hover:bg-white'>
							<ArrowLeft />
						</Button>
						<Button className='p-3 rounded-full bg-[#dcdcdc] hover:bg-white rotate-180'>
							<ArrowLeft />
						</Button>
					</div>
				</div>
				<div className='flex justify-between items-center pt-14'>
					{categories &&
						categories.map(category => (
							<Category key={category.title} title={category.title} categoryIcon={category.icon} />
						))}
				</div>
			</Container>
		</Section>
	)
}
