import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

export default function TasksPage() {

    const variants = {
        hidden: {opacity: 0, x: -200, y: 0},
        enter: {opacity: 1, x: 0, y: 0},
        exit: {opacity: 0, x: 0, y: 100},
    }

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <title>Tasks - OutPlan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <motion.main
                    key={5}
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ease: 'anticipate', duration: 0.5}}
                    className=""
                >
                    <h1>Tasks</h1>
                </motion.main>
            </div>
        </>
    )
}