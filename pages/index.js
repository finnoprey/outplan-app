import Head from 'next/head'
import { useEffect } from 'react'
import DashboardTiles from '../components/DashboardTiles/DashboardTiles'
import BottomNavBar from '../components/Nav/BottomNavBar'
import { AnimatePresence, motion } from 'framer-motion';

export default function Dashboard({animation}) {

  const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0},
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <title>Dashboard - OutPlan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.main
        key={6}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ease: 'anticipate', duration: 0.5}}
        className=""
      >
        <DashboardTiles />
      </motion.main>
    </>
  )
}
