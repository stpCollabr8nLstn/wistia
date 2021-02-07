import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
