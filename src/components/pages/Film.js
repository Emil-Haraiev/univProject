import SeatReservation from "../SeatReservation";
import FilmSeatPlan from "../FilmSeatPlan";
import React from "react";
import FilmReservInfo from "../FilmReservInfo";
import './index.css';

const Film = () =>{
    return(
        <>
            <div className='filmWrapper'>
                <FilmReservInfo/>
                <FilmSeatPlan/>
            </div>
            {/*<SeatReservation/>*/}
        </>
    )
}

export default Film;