import Head from 'next/head'
import Header from '../components/Header/Header'
import BottomNavBar from '../components/Nav/BottomNavBar'
import { useEffect } from 'react';
import CalendarComponent from '../components/Calendar/CalendarComponent';

export default function CalendarPage() {

    useEffect(() => {
        //TODO: GET NEW EVENTS DATA FROM SERVER
    }, []);

    const TESTMETA = "Test meta for an event.";

    const placeholderEvents = [
        {
            id: 1,
            name: "Test 1",
            dateFrom: "2022-04-04T12:00",
            dateTo: "2022-04-05T12:00",
            meta: TESTMETA,
            type: 'activity'
        }
    ];

    return (
        <>
            <Head>
                <title>Calendar - OutPlan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <div>
                <Header />
                <div className='pagecontentpad'>
                    <CalendarComponent />
                </div>
                <BottomNavBar active="calendar" />
            </div>
        </>
    )
}