import React from "react";
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination, Scrollbar,A11y} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const DateFilter = () =>{

    let date = new Date().getDate();

   return (

       <Swiper
           className='DateFilterWrapper'
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={7}
           navigation
           // onSwiper={(swiper) => console.log(swiper)}
           // onSlideChange={() => console.log('slide change')}

       >
               <SwiperSlide >
                   <button className='DateFilterBlock active'>
                       <div className='date'>{new Date().getDate()}</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className ='DateFilterBlock'>
                       <div className='date'>{date}</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>3</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>4</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>5</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>6</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>7</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>8</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className ='DateFilterBlock'>
                       <div className='date'>9</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>10</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>11</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>12</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>13</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
               <SwiperSlide>
                   <button className='DateFilterBlock'>
                       <div className='date'>14</div>
                       <div className='month'>Травня</div>
                   </button>
               </SwiperSlide>
       </Swiper>
   )
}



export default DateFilter;