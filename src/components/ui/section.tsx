import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const Section: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
	return <section className={cn('py-16', className)}>{children}</section>
}
