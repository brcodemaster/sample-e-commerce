import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

type Props = {
	className?: string
}

export const LocaleSwitcher: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<div className='flex items-center gap-2'>
				English
				<ChevronDown className='cursor-pointer' color='white' />
			</div>
		</div>
	)
}
