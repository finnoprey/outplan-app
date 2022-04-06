import dayjs from 'dayjs';
import React, { useContext, useEffect, useRef, useState } from 'react'
import GlobalContext from '../../context/GlobalContext';
import styles from './Calendar.module.scss';

const Day = ({day, clickEvent}) => {

    const {monthIndex, setMonthIndex} = useContext(GlobalContext);

    const ref = useRef(null);
    
    const handleClick = (e) => {
        clickEvent(e);
        if (getCurrentDayClass() != styles.today) {
            setClickClass(styles.focussedDay);
        }
        setDaySelected(day);
        setShowEventModal(true);
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setClickClass('');
            }
        };
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true)
        };
    }, [])

    const [clickClass, setClickClass] = useState('');
    var otherMonthStyle = '';
    const {setDaySelected, setShowEventModal} = useContext(GlobalContext);
    
    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? styles.today : '';
    }

    const viewingDate = new Date(dayjs().year(), monthIndex, 1);

    if (
        day.isBefore(new Date(dayjs().year(), monthIndex, 1)) //BEFORE FIRST DAY OF VIEWING MONTH
        || 
        day.isAfter(new Date(viewingDate.getFullYear(), viewingDate.getMonth()+1, 0))) { //LAST DAY OF VIEWING MONTH
        otherMonthStyle = styles.lastMonthDate;
    }

    return (
        <div ref={ref} onClick={handleClick} className={`${styles.day} ${otherMonthStyle}`}>
            <p className={`${getCurrentDayClass()} ${clickClass}`}>
                {day.format('DD')}
            </p>
            <div className={styles.events}>

            </div>
        </div>
        
    )
}

export default Day