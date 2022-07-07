import React from "react";

import './index.css';
import location from '../../assets/location.svg';
import time from '../../assets/time.svg';
import calendar from '../../assets/calendar.svg';
import arrow from '../../assets/arrow-left.svg';
import {useLocation, Link} from "react-router-dom";
const FilmReservInfo = () => {
    const {state} = useLocation()


    return(
       <>
           <Link to='/' className='arrowBack'>
               <img className='arrowBackImg' src={arrow}/>
           </Link>
           <div className='filmInform'>
               <img className ='filmImg' src={state.img} alt='img'/>
               <div className='filmInfoBody'>
                   <div className = 'filmName'>{state.name}</div>
                   <div className='filmDate'>
                       <img src={calendar} alt='calendar'/>
                       <div className ='filmDateInfo'> 27 червня 2022</div>
                   </div>
                   <div className='filmDate' >
                       <img src={location} alt='location'/>
                       <div className ='filmDateInfo'>ТЦ Никольский</div>
                   </div>
                   <div className='ukraine'></div>
                   <div className='filmDate'>
                       <img src={time} alt='time'/>
                       <div className='filmDateInfo'>Час</div>
                   </div>
                   <div className = 'filmSession'>
                       <button className ='filmHour'>09:00</button>
                       <button className ='filmHour'>11:00</button>
                       <button className ='filmHour'>13:00</button>
                       <button className ='filmHour'>18:00</button>
                       <button className ='filmHour'>20:00</button>
                       <button className ='filmHour'>22:00</button>
                   </div>
               </div>
           </div>
       </>

    )
}


export default FilmReservInfo;