import '../styles/globals.scss'
import '../styles/themes.css'
import type { AppProps } from 'next/app'
import { ClickToComponent } from 'click-to-react-component'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClickToComponent />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
