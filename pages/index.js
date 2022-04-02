import Head from 'next/head'
import DashboardTiles from '../components/DashboardTiles/DashboardTiles'
import Header from '../components/Header/Header'
import BottomNavBar from '../components/Nav/BottomNavBar'

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div>
        <Header />
        <DashboardTiles />
        <BottomNavBar />
      </div>
    </>
    
  )
}
