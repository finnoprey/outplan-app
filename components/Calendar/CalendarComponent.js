import { Fragment, useState } from 'react';
import { getMonth } from './util';
import styles from './Calendar.module.scss';
import CalendarHeader from './CalendarHeader';
import CalendarSidebar from './CalendarSidebar';
import Month from './Month';

const CalendarComponent = ({events}) => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const [selectedDay, setSelectedDay] = useState('');

    const onDayClick = (e) => {
        console.log(e.target);
        setSelectedDay(e.target);
    }

    return (
        <Fragment>
            <div className={`${styles.calendarContainer}`}>
                <CalendarHeader month={currentMonth} />
                <div className={`${styles.calendarContent}`}>
                    <Month dayClick={onDayClick} month={currentMonth}/>
                    <CalendarSidebar />
                </div>
            </div>
        </Fragment>
    )
}

export default CalendarComponent;