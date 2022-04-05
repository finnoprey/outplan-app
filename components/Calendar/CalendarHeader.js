import React from 'react'
import styles from './Calendar.module.scss';
import { getMonth } from './util';

const CalendarHeader = ({month}) => {
    console.log(getMonth());
    return (
        <div className={`${styles.calendarHeader}`}>{}</div>
    )
}

export default CalendarHeader