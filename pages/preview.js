import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import PreviewStory from "@components/PreviewStory";

export default function Home() {
  return (
    <div className="wrapper-outer">
      <div className="wrapper-inner">
        <div className="scrollable">
          <div className="content">
            <Head>
              <title>Storyverse - Preview Story</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <Header />
              <PreviewStory />
            </main>
          </div>
        </div>
        <Footer activeLink="generate" numNotifications="3" />
      </div>
    </div>
  )
}
