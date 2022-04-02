import Head from 'next/head'
import Header from '../components/Header/Header'
import BottomNavBar from '../components/Nav/BottomNavBar'
import { useEffect } from 'react';

export default function CalendarPage() {
    return (
        <>
            <Head>
                <title>Calendar - OutPlan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <div>
                <Header />
                <h1>Calendar</h1>
                <BottomNavBar active="calendar" />
            </div>
        </>
    )
}