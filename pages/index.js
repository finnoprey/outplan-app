import Head from 'next/head'
import { useEffect } from 'react'
import DashboardTiles from '../components/DashboardTiles/DashboardTiles'
import Header from '../components/Header/Header'
import BottomNavBar from '../components/Nav/BottomNavBar'

export default function Dashboard() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <title>Dashboard - OutPlan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header />
        <DashboardTiles />
        <BottomNavBar />
      </div>
    </>
    
  )
}
