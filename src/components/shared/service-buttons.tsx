import { serviceButtons } from '../../../db/db'

import { Container, ServiceButton } from '../ui'

export const ServiceButtons: React.FC = () => {
	return (
		<Container className='flex justify-around items-center py-[140px]'>
			{serviceButtons &&
				serviceButtons.map(serviceButton => (
					<ServiceButton
						key={serviceButton.title}
						icon={serviceButton.icon}
						title={serviceButton.title}
						description={serviceButton.description}
					/>
				))}
		</Container>
	)
}
