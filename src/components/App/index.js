import React from "react";
import Films from "../Films";
import {cards} from "../../constants";
import TechFilter from "../TechFilter";
import DateFilter from "../DateFilter";
import FilmSeatPlan from "../FilmSeatPlan";
import './index.css'
import SeatReservation from "../SeatReservation";

const App = () => {
    return (
            <>
                {/*<DateFilter/>*/}
                {/*<TechFilter/>*/}
                {/*<Films films = {cards}/>*/}
                <FilmSeatPlan/>
                <SeatReservation/>
            </>
    )
}

export default App;