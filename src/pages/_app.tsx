// pages/_app.tsx
import '../styles/index.scss'
import ThemeProvider from '@/src/components/provider/ThemeProvider'
import Head from 'next/head'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 如果当前没有要添加的元素，可以暂时留空 */}
      <Head>
        {/* 未来需要添加到 <head> 中的内容可以放在这里 */}
        <meta name='description' content='这是一个全局描述' />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
