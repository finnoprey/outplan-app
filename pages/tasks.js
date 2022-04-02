import Head from 'next/head'
import Header from '../components/Header/Header'
import BottomNavBar from '../components/Nav/BottomNavBar'

export default function TasksPage() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <title>Tasks - OutPlan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <Header />
                <h1>Tasks</h1>
                <BottomNavBar active="tasks" />
            </div>
        </>
    )
}