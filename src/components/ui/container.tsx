import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
	return <div className={cn('max-w-[1202px] px-4 mx-auto', className)}>{children}</div>
}
