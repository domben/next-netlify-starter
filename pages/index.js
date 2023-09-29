import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import BranchCreate from "@components/BranchCreate";

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
              <BranchCreate />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
