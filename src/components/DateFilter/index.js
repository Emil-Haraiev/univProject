import React from "react";
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const DateFilter = ({handleDateChange, activeDay,days}) =>{

    const date = days.map((item, index) => {
        const numberOfDate = +item.split(' ')[0]
        return (
            <SwiperSlide  key={index}>
                <button onClick={() => handleDateChange(numberOfDate) } style={{backgroundColor: numberOfDate === activeDay ? '#ee6a59' : '#3a3f58'}} className='DateFilterBlock ' >
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