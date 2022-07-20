import './_app.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import CustomCursor from 'components/Cursor'
import useDeviceDetect from 'hooks/useDeviceDetect'
import MouseContextProvider from 'context/mouse-context'

function MyApp({ Component, pageProps }: AppProps) {
	const { isMobile } = useDeviceDetect()

	return (
		<>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy='lazyOnload' id='analytics'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
			</Script>
			<MouseContextProvider>
				{!isMobile && <CustomCursor />}
				<Component {...pageProps} />
			</MouseContextProvider>
		</>
	)
}

export default MyApp
