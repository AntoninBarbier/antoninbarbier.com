import { MouseContext, MouseContextType } from 'context/mouse-context'
import useMousePosition from 'hooks/useMousePosition'
import { useContext, useEffect } from 'react'
import styles from './styles.module.scss'

const Cursor = () => {
	const { x, y } = useMousePosition()
	const { cursorType, cursorChangeHandler } = useContext(
		MouseContext
	) as MouseContextType

	const handleClick = (event: MouseEvent) => {
		if (event.type === 'mousedown') {
			cursorChangeHandler('clicked')
		} else {
			cursorChangeHandler('')
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		document.addEventListener('mouseup', handleClick)

		return () => {
			document.removeEventListener('mousedown', handleClick)
			document.removeEventListener('mouseup', handleClick)
		}
	}, [])

	return (
		<>
			<div
				className={`${styles.cursor} ${styles[cursorType] || ''}`}
				style={{ transform: `translate3d(${x}px, ${y}px, 0` }}
			>
				<div></div>
			</div>
			<div
				className={`${styles.outer} ${styles[cursorType] || ''}`}
				style={{ transform: `translate3d(${x}px, ${y}px, 0` }}
			>
				<div></div>
			</div>
		</>
	)
}

export default Cursor
