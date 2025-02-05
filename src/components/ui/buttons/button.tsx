import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva('duration-200', {
	variants: {
		variant: {
			default: 'bg-red-500 py-4 px-4 text-accent font-medium hover:bg-red-400',
			destructive: '',
			rounded: 'p-2 bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center',
			secondary: 'bg-primary font-base text-accent text-center py-1',
			ghost: '',
			link: '',
		},
		size: {
			default: '',
			sm: '',
			lg: '',
			icon: '',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
})

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
