import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Philkeyz Official!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Website is coming soon" />
        <p className="description">
          Watch this space. check out philkeyz socials @philkeyz</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
