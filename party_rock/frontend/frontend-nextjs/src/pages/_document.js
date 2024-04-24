import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-x+ujVUd2jAZywSz/eu6VrP6Ntu3Szmwz3k9hFZBTMgWkB3b/VvALn+hZLO2tO5NClgI0Ya2Kqv57b32cdJt4yA=="
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
           {`
           if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
           `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
