import {createContext} from "react";

const GlobalContext = createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    clientSubjects: [],
    setClientSubjects: () => {}
});

export default GlobalContext;