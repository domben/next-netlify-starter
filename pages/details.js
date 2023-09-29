import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import BranchCreate from "@components/BranchCreate";
import BranchesDetails from "@components/BranchDetails";

export default function Home() {
  return (
    <div className="wrapper-outer">
      <div className="wrapper-inner">
        <div className="scrollable">
          <div className="content">
            <Head>
              <title>Storyverse - Story Details</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <Header />
              <BranchesDetails />
            </main>
          </div>
        </div>
        <Footer activeLink="generate" numNotifications="3" />
      </div>
    </div>
  )
}
