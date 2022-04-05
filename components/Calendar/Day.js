import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react'
import styles from './Calendar.module.scss';

const Day = ({day, clickEvent}) => {

    const ref = useRef(null);
    
    const handleClick = (e) => {
        clickEvent(e);
        if (getCurrentDayClass() != styles.today) {
            setClickClass(styles.focussedDay);
        }
    }

    const deselect = (e) => {
        setClickClass('');
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                deselect && deselect(e);
            }
        };
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true)
        };
    }, [deselect])

    const [clickClass, setClickClass] = useState('');
    const [testCntent, setTest] = useState('hello');
    
    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? styles.today : '';
    }

    return (
        <div ref={ref} onClick={handleClick} className={`${styles.day}`}>
            <p className={`${getCurrentDayClass()} ${clickClass}`}>
                {day.format('DD')}
            </p>
            
        </div>
    )
}

export default Day