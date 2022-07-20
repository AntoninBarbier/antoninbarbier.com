import React, { createContext, ReactNode, useState } from 'react'

type MouseContextProviderPropsType = {
	children?: ReactNode
}

type CursorType = 'hovered' | 'clicked' | 'hidden' | ''

export type MouseContextType = {
	cursorType: CursorType
	cursorChangeHandler: (cursorType: CursorType) => void
}

export const MouseContext = createContext<MouseContextType | null>(null)

const MouseContextProvider = ({ children }: MouseContextProviderPropsType) => {
	const [cursorType, setCursorType] = useState<CursorType>('')

	const cursorChangeHandler = (cursorType: CursorType) => {
		setCursorType(cursorType)
	}

	return (
		<MouseContext.Provider
			value={{
				cursorType: cursorType,
				cursorChangeHandler: cursorChangeHandler,
			}}
		>
			{children}
		</MouseContext.Provider>
	)
}

export default MouseContextProvider
