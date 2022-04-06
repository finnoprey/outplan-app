import React from 'react'
import CreateEventButton from './CreateEventButton';
import styles from './Calendar.module.scss';

const CalendarSidebar = () => {
    return (
        <aside className={styles.calendarSidebar}>
            <CreateEventButton />
        </aside>
    )
}

export default CalendarSidebar