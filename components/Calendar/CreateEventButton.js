import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import styles from './Calendar.module.scss';

export default function CreateEventButton() {

    const {setShowEventModal} = useContext(GlobalContext);

    return (
        <button onClick={() => setShowEventModal(true)} className={styles.createBtn}>
            <span className="material-icons">
            add
            </span>
            <span> Create Event</span>
        </button>
    )
}