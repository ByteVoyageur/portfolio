// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* 在这里添加自定义字体的链接 */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Abril+Fatface&family=DM+Sans:wght@400;500;700&family=EB+Garamond:wght@400;500;600;700;800&family=Kufam:wght@400;500;600;700&display=swap'
          />
          {/* 其他全局头部信息也可以在这里添加 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
