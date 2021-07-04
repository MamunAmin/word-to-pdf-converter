import Head from 'next/head'
import { Heading } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WORD to PDF</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="keywords" content="word to pdf, convert, online, free" />
      </Head>
      <Heading/>
      <Component {...pageProps} />
    </>
  ) 
}
export default MyApp