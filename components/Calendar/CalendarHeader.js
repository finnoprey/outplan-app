import React from 'react'
import styles from './Calendar.module.scss';
import { getMonth } from './util';

const CalendarHeader = ({month}) => {
    return (
        <div className={`${styles.calendarHeader}`}>
            <h1 className={`${styles.calendarDate}`}>
                April, 2022
            </h1>
            <div className={`${styles.calendarActions}`}>
                <button className={`${styles.todayBtn}`}>
                    Today
                </button>
                <button className={`${styles.lrBtn}`}>
                    <span className="material-icons">
                        chevron_left
                    </span>
                </button>
                <button className={`${styles.lrBtn}`}>
                    <span className="material-icons">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
    )
}

export default CalendarHeader