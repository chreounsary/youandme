import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <meta property="og:image" content="https://demo.vercel.events/twitter-card.png"></meta>
      <meta property='og:title' content='' />
      <meta property='og:description' content='' />
      <meta property="og:url" content="https://demo.vercel.events/stage/a"></meta>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
