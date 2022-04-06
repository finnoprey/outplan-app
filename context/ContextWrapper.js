import dayjs from "dayjs"
import { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"

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

    useEffect(() => {
        // TODO: GET SUBJECTS FOR CLIENT
        
    }, []);

    return (
        <GlobalContext.Provider value={{
            monthIndex, 
            setMonthIndex,
            daySelected,
            setDaySelected,
            showEventModal,
            setShowEventModal,
            clientSubjects,
            setClientSubjects
        }}>
            {children}
        </GlobalContext.Provider>
    )
}