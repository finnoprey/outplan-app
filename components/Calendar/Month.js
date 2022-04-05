import React, { Fragment } from 'react'
import styles from './Calendar.module.scss';
import Day from './Day';

const Month = ({month, dayClick}) => {
    return (
        <div className={`${styles.monthGrid}`}>
            {month.map((week, i) => {
                return <Fragment key={i}>
                    {week.map((day, j) => {
                        return <Day clickEvent={dayClick} day={day} key={j}/>
                    })}
                </Fragment>
            })}
        </div>
    )
}

export default Month