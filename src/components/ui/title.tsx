import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

interface Props {
	className?: string
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const titleVariants = cva('', {
	variants: {
		size: {
			sm: 'text-xl font-medium text-accent',
			md: 'text-2xl font-bold text-accent',
			lg: 'text-3xl font-semibold text-primary',
			xl: 'text-5xl font-semibold text-accent',
			'2xl': 'text-4xl font-semibold',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

export const Title: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	size = 'md',
	children,
}) => {
	return <div className={cn(titleVariants({ size }), className)}>{children}</div>
}
