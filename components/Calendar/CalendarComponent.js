import { Fragment, useState, useContext, useEffect } from 'react';
import { getMonth } from './util';
import styles from './Calendar.module.scss';
import CalendarHeader from './CalendarHeader';
import CalendarSidebar from './CalendarSidebar';
import Month from './Month';
import GlobalContext from '../../context/GlobalContext';
import EventModal from './EventModal';

const CalendarComponent = ({events, subjects}) => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const [selectedDay, setSelectedDay] = useState('');

    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    const onDayClick = (e) => {
        setSelectedDay(e.target);
    }

    return (
        <Fragment>
            {showEventModal && <EventModal clientSubjects={subjects} />}
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