import React, {useState} from "react";
import Films from "../Films";
import {cards, month} from "../../constants";
import DateFilter from "../DateFilter";
import FilmSeatPlan from "../FilmSeatPlan";
import './index.css'
import SeatReservation from "../SeatReservation";


const App = () => {
    const [activeDay, setActiveDay] = useState(new Date().getDate())

    const days = []

    for(let i = -2; i < 7; i++) {
        let j = i + 2
        let somedate = new Date();
        somedate.setMonth(somedate.getMonth(), somedate.getDate() + i);
        days.push(String(somedate.getDate()) + ' ' + month[somedate.getMonth()]);
        cards[j].date = somedate.getDate()
    }

    const handleDateChange = (value) => {
        setActiveDay(value)
    }

    return (
            <>
                <DateFilter days={days} handleDateChange={handleDateChange} activeDay={activeDay}/>
                <Films films = {cards} activeDay={activeDay}/>
                {/*<FilmSeatPlan/>*/}
                {/*<SeatReservation/>*/}
            </>
    )
}

export default App;