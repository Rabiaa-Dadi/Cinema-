import '../styles/globals.css'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import {NextUIProvider} from '@nextui-org/react'




export default function App({ Component, pageProps }) {
  return (
    <>
    
  <Layout>
    <Head>
        <title>Films</title>
      </Head>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}
