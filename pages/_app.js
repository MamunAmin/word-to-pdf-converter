import Head from 'next/head'
import { Heading } from '../components'
import { Subheading } from '../components'
import { Footer } from '../components'
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
      <Subheading/>
      <Component {...pageProps} />
      <Footer/>
      {
      }
    </>
  ) 
}
export default MyApp