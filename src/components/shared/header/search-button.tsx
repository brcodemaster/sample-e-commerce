'use client'

import { Cart, Favorite, Search } from '@/components/ui'
import { KeyboardEventHandler, useState } from 'react'

export const SearchButton: React.FC = () => {
	const [query, setQuery] = useState('')

	const onKeyDown: KeyboardEventHandler<HTMLDivElement> = e => {
		if (e.key === 'Enter') {
			console.log(query)
			setQuery('')
		}
	}

	return (
		<div className='flex items-center gap-6'>
			<div className='relative bg-[#f5f5f5] px-5 py-2'>
				<input
					type='text'
					name='search'
					value={query}
					placeholder='What are you looking for?'
					onChange={e => setQuery(e.target.value)}
					onKeyDown={onKeyDown}
					className='pr-5 outline-none bg-[#f5f5f5] font-medium'
				/>
				<Search className='absolute top-1/2 -translate-y-1/2 right-3' />
			</div>
			<Favorite />
			<Cart />
		</div>
	)
}
