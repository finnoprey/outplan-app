import dayjs from "dayjs"
import { useEffect, useReducer, useState } from "react"
import GlobalContext from "./GlobalContext"

const savedEventsReducer = (state, {type, payload}) => {
    switch (type) {
        case 'push':
            return [...state, payload];
        case 'update':
            return state.map(event => event.id === payload.id ? payload : event);
        case 'delete':
            return state.filter(event => event.id !== payload.id);
        default:
            throw new Error();
    }
}

const initialiseEvents = () => {
    // TODO: REMOVE RELIANCE ON LOCALSTORAGE AND INSTEAD USE DATABASE CALLS
    if (typeof window !== 'undefined') {
        const localStorageEvents = localStorage.getItem('outplan-saved-events');
        const parsedEvents = localStorageEvents ? JSON.parse(localStorageEvents) : []
        return parsedEvents;
    }
}

export default function ContextWrapper({children}) {

    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [clientSubjects, setClientSubjects] = useState([
        {
            name: "Physics",
            color: "#ff00ff",
            tasks: []
        },
        {
            name: "Chemistry",
            color: "#ffff00",
            tasks: []
        }
    ]);

    const [savedEvents, dispatchCallEvent] = useReducer(
        savedEventsReducer, 
        [], 
        initialiseEvents
    );

    useEffect(() => {
        // TODO: GET SUBJECTS FOR CLIENT
        
    }, []);

    useEffect(() => {
        // TODO: REMOVE RELIANCE ON LOCALSTORAGE AND INSTEAD USE DATABASE CALLS
        if (typeof window !== 'undefined') {
            localStorage.setItem('outplan-saved-events', JSON.stringify(savedEvents));
        }
    }, [savedEvents]);

    return (
        <GlobalContext.Provider value={{
            monthIndex, 
            setMonthIndex,
            daySelected,
            setDaySelected,
            showEventModal,
            setShowEventModal,
            clientSubjects,
            setClientSubjects,
            dispatchCallEvent
        }}>
            {children}
        </GlobalContext.Provider>
    )
}