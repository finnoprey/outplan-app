import styles from './BottomNavBar.module.scss';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const BottomNavBar = props => {
    const router = useRouter();

    return (
        <div className={styles.bottomNav}>
            <div className={`${styles.bnTab} ${styles.active}`}>
                <Link href="/">
                    <span className='material-icons'>
                        home
                    </span>
                </Link>
            </div>
            <div className={styles.bnTab}>
                <Link href="/calendar">
                    <span className='material-icons'>
                        event
                    </span>
                </Link>
            </div>
            <div className={styles.bnTab}>
                <Link href="/tasks">
                    <span className='material-icons'>
                        description
                    </span>
                </Link>
            </div>
        </div>
    )
}
export default BottomNavBar;