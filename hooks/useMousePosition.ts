import { MouseContext, MouseContextType } from 'context/mouse-context'
import { useContext, useEffect, useState } from 'react'

const useMousePosition = () => {
	// Set x -50 to hide cursor when mousemove not triggered yet
	const [mousePosition, setMousePosition] = useState({ x: -50, y: 0 })
	const { cursorChangeHandler } = useContext(MouseContext) as MouseContextType

	useEffect(() => {
		const mouseMoveHandler = (event: MouseEvent) => {
			const { clientX, clientY } = event
			setMousePosition({ x: clientX, y: clientY })
		}

		const mouseEnterHandler = (event: MouseEvent) => {
			const { clientX, clientY } = event
			if (
				clientY >= 0 ||
				clientX >= 0 ||
				clientX <= window.innerWidth ||
				clientY <= window.innerHeight
			) {
				cursorChangeHandler('')
			}
		}

		const mouseLeaveHandler = (event: MouseEvent) => {
			const { clientX, clientY } = event
			if (
				clientY < 0 ||
				clientX < 0 ||
				clientX >= window.innerWidth ||
				clientY > window.innerHeight
			) {
				cursorChangeHandler('hidden')
			}
		}

		document.addEventListener('mousemove', mouseMoveHandler)
		document.addEventListener('mouseenter', mouseEnterHandler)
		document.addEventListener('mouseleave', mouseLeaveHandler)

		return () => {
			document.removeEventListener('mousemove', mouseMoveHandler)
			document.removeEventListener('mouseenter', mouseEnterHandler)
			document.removeEventListener('mouseleave', mouseLeaveHandler)
		}
	}, [])

	return mousePosition
}

export default useMousePosition
