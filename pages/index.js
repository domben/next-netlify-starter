import Feeds from "@components/Feeds";
import Footer from '@components/Footer'
import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="wrapper-outer">
      <div className="wrapper-inner">
        <div className="scrollable">
          <div className="content">
            <Head>
              <title>Storyverse</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <Header />
              <Feeds />
            </main>
          </div>
        </div>
        <Footer activeLink="home" numNotifications="3" />
      </div>
    </div>
  )
}
