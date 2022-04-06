import dayjs from 'dayjs';
import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext';
import styles from './Calendar.module.scss';
import { getMonth } from './util';


const CalendarHeader = ({month}) => {

    const {monthIndex, setMonthIndex} = useContext(GlobalContext);

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }

    const handleToday = () => {
        setMonthIndex(dayjs().month());
    }

    return (
        <div className={`${styles.calendarHeader}`}>
            <h1 className={`${styles.calendarDate}`}>
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h1>
            <div className={`${styles.calendarActions}`}>
                <button className={`${styles.todayBtn}`} onClick={handleToday}>
                    Today
                </button>
                <button className={`${styles.lrBtn}`} onClick={handlePrevMonth}>
                    <span className="material-icons">
                        chevron_left
                    </span>
                </button>
                <button className={`${styles.lrBtn}`} onClick={handleNextMonth}>
                    <span className="material-icons">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
    )
}

export default CalendarHeader