import React, {useMemo, useState} from "react";
import './index.css'
import close from '../../assets/close.svg'


const SeatReservation = ({selectedItems,setModalActive, setBooking,setSelectedItems}) => {

    const styles = {
        display: !selectedItems.length  ? 'none' : ''

    }
    const handleBooking = () => {
        let tickets = JSON.parse(localStorage.getItem('tickets'));
        localStorage.setItem('tickets', JSON.stringify(tickets));
        setModalActive(true)
        setSelectedItems([])
    }
    const removeTicket = (seat) => {
        setSelectedItems(selectedItems.filter(item => item.id !== seat.id))

    }
    const info = selectedItems.map((item, i)=> {

        return(
            <div className='wrap' key={i}>
                <div className='infoWrapper'>
                    <div className="reservation" >
                        <div className='reservationInfo'>
                            <div className="row">
                                <div className="rowNumber">{item.row}</div>
                                <div className="rowName">ряд</div>
                            </div>
                            <div className="place">
                                <div className="placeNumber">{item.place}</div>
                                <div className="placeName">місце</div>
                            </div>
                        </div>
                        <div className="price"> {item.price} <span>грн</span></div>
                    </div>
                </div>
                <div>
                    <img className='closeImg' onClick={() => removeTicket(item)} src={close} alt="close"/>
                </div>
            </div>
        )
    })
     return (
         <div className='seatReservationWrapper'>
             {info}
             <button onClick={() => handleBooking()} style={styles} className="reservationBtn" >
                 Забронювати
             </button>
         </div>
     )
}


export default SeatReservation;