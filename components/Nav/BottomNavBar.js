import styles from './BottomNavBar.module.scss';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const BottomNavBar = props => {
    const activeLink = props.active;
    const router = useRouter();

    var homeLinkClasses = `${styles.bnTab}`;
    var calendarLinkClasses = `${styles.bnTab}`;
    var taskLinkClasses = `${styles.bnTab}`;
    // HOME LINK CLASS
    if (router.pathname.endsWith('/')) {
        homeLinkClasses = `${styles.bnTab} ${styles.active}`;
    }
    // CALENDAR LINK CLASS
    if (router.pathname.endsWith('calendar')) {
        calendarLinkClasses = `${styles.bnTab} ${styles.active}`;
    }
    // TASKS LINK CLASS
    if (router.pathname.endsWith('tasks')) {
        taskLinkClasses = `${styles.bnTab} ${styles.active}`;
    }

    return (
        <div className={styles.bottomNav}>
            <div className={homeLinkClasses}>
                <Link href="/" passHref>
                    <span className='material-icons'>
                        home
                    </span>
                </Link>
            </div>
            <div className={calendarLinkClasses}>
                <Link href="/calendar" passHref>
                    <span className='material-icons'>
                        event
                    </span>
                </Link>
            </div>
            <div className={taskLinkClasses}>
                <Link href="/tasks" passHref>
                    <span className='material-icons'>
                        description
                    </span>
                </Link>
            </div>
        </div>
    )
}
export default BottomNavBar;