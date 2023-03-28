import '@/styles/globals.css'
import SafeProvider from '@safe-global/safe-apps-react-sdk'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SafeProvider>
      <Component {...pageProps} />
    </SafeProvider>
  )
}
