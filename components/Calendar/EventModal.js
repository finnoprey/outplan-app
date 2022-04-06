import React, { useContext, useEffect, useRef, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import styles from './Calendar.module.scss';

export default function EventModal(props) {

    const {setShowEventModal, daySelected} = useContext(GlobalContext);
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventSubject, setEventSubject] = useState('');

    const formRef = useRef(null);
    useEffect(() => {
        let ref = formRef;

        const handleClickEvent = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowEventModal(false);
            }
        }

        document.addEventListener('mousedown', handleClickEvent);
        return () => {
            document.removeEventListener('mousedown', handleClickEvent);
        }
    }, [setShowEventModal]);

    const subjects = props.clientSubjects;

    return (
        <div className={styles.eventModal}>
            <form ref={formRef} className={styles.eventForm}>
                <header>
                    <h1>Add event</h1>
                    <button onClick={() => setShowEventModal(false)}>
                        <span className='material-icons'>
                            close
                        </span>
                    </button>
                </header>
                <div className={styles.formBody}>
                    <div className={styles.formFields}>
                        <div>
                            <span className="material-icons">
                                local_offer
                            </span>
                        </div>
                        <input 
                            type="text" 
                            name="event_name" 
                            placeholder="Event name..." 
                            value={eventName}
                            required
                            className={styles.textInputFull}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                        <div>
                            <span className="material-icons">
                                schedule
                            </span>
                        </div>
                        <p className={styles.textLabelFull}>{daySelected.format("dddd, MMMM DD")}</p>
                        <div className={styles.largeLabel}>
                            <span className="material-icons">
                                segment
                            </span>
                        </div>
                        <textarea
                            name="event_description"
                            placeholder="Add a description..."
                            value={eventDescription}
                            className={styles.largeText}
                            onChange={(e) => setEventDescription(e.target.value)}
                        />
                        <div>
                            <span className="material-icons">
                                bookmark_border
                            </span>
                        </div>

                        <select value={eventSubject} onChange={(e) => setEventSubject(e.target.value)} className={styles.selectFull}>
                            <option value='default' selected disabled>Select a subject</option>
                            {subjects.map((subject, i) => {
                                return (
                                    <option key={i} value={subject.name}>
                                        {subject.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <footer>
                    <button type="submit">
                        Add event
                    </button>
                </footer>
            </form>
        </div>
    )
}