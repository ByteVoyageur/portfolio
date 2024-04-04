// pages/_app.tsx
import '@/src/styles/index.scss'
import ThemeProvider from '@/src/components/provider/ThemeProvider'
import Head from 'next/head'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='description' content='Xiaosong portfilio' />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
