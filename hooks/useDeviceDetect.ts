import React, { useEffect } from 'react'

const useDeviceDetect = () => {
	const [isMobile, setMobile] = React.useState(false)
	useEffect(() => {
		const userAgent =
			typeof navigator === 'undefined' ? '' : navigator.userAgent

		const mobile = Boolean(
			userAgent.match(
				/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
			)
		)
		setMobile(mobile)

		return () => {}
	}, [])

	return { isMobile }
}

export default useDeviceDetect
