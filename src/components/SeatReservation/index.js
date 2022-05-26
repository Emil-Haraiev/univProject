import React from "react";
import './index.css'



const SeatReservation = () => {
     return (
         <div className='seatReservationWrapper'>
             <div className="reservation">
                 <div className='reservationInfo'>
                     <div className="row">
                         <div className="rowNumber">7</div>
                         <div className="rowName">ряд</div>
                     </div>
                     <div className="place">
                         <div className="placeNumber">8</div>
                         <div className="placeName">місце</div>
                     </div>
                 </div>
                 <div className="price"> 150 <span>грн</span></div>

             </div>


             <button className="reservationBtn">
                 Забронювати
             </button>
         </div>
     )
}


export default SeatReservation;