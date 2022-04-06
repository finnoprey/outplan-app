import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head'
import { useContext, useEffect } from 'react';
import CalendarComponent from '../components/Calendar/CalendarComponent';
import GlobalContext from '../context/GlobalContext';

export default function CalendarPage() {

    const {clientSubjects} = useContext(GlobalContext);

    const variants = {
        hidden: {opacity: 0, x: 0, y: 100},
        enter: {opacity: 1, x: 0, y: 0},
        exit: {opacity: 0, x: 0, y: 100},
    }

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
            <motion.main
                key={10}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ease: 'anticipate', duration: 0.5}}
                className=""
            >
                <CalendarComponent subjects={clientSubjects} />
            </motion.main>
        </>
    )
}