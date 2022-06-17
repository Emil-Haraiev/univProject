import React, {useCallback, useState} from "react";
import './index.css'
import {cards, month} from "../../constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination, Scrollbar,A11y} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const DateFilter = ({handleDateChange, activeDay,days}) =>{

    const date = days.map((item, index) => {
        const numberOfDate = +item.split(' ')[0]
        return (
            <SwiperSlide  key={index}>
                <button onClick={() => handleDateChange(numberOfDate) } style={{backgroundColor: numberOfDate === activeDay ? 'red' : 'white'}} className='DateFilterBlock ' >
                    <div className='date' >{item}</div>
                </button>
            </SwiperSlide>
        )
    })
    return (

       <Swiper
           className='DateFilterWrapper'
           modules={[Navigation]}
           spaceBetween={20}
           slidesPerView={4}
           navigation
       > { date }</Swiper>

   )
}



export default DateFilter;