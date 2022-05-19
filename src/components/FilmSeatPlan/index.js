import React from "react";

import './index.css'
import {v4 as uuidv4} from "uuid";


const FilmSeatPlan = () => {
    const seating = [
        {row: 1, place:1, free: true, id: uuidv4(), price: 150},
        {row: 1, place:2, free: true, id: uuidv4(), price: 150},
        {row: 1, place:3, free: true, id: uuidv4(), price: 150},
        {row: 1, place:4, free: true, id: uuidv4(), price: 150},
        {row: 1, place:5, free: false,id: uuidv4(), price: 150},
        {row: 1, place:6, free: true, id: uuidv4(), price: 150},
        {row: 1, place:7, free: false,id: uuidv4(), price: 150},
        {row: 1, place:8, free: true, id: uuidv4(), price: 150},
        {row: 1, place:9, free: true, id: uuidv4(), price: 150},
        {row: 1, place:10, free: true,id:uuidv4(), price: 150},
        {row: 1, place:11, free: true, id: uuidv4(), price: 150},
        {row: 1, place:12, free: true, id: uuidv4(), price: 150},
        {row: 1, place:13, free: true, id: uuidv4(), price: 150},
        {row: 1, place:14, free: true, id: uuidv4(), price: 150},
        {row: 2, place:1, free: true, id: uuidv4(), price: 150},
        {row: 2, place:2, free: true, id: uuidv4(), price: 150},
        {row: 2, place:3, free: true, id: uuidv4(), price: 150},
        {row: 2, place:4, free: true, id: uuidv4(), price: 150},
        {row: 2, place:5, free: false,id: uuidv4(), price: 150},
        {row: 2, place:6, free: true, id: uuidv4(), price: 150},
        {row: 2, place:7, free: false,id: uuidv4(), price: 150},
        {row: 2, place:8, free: true, id: uuidv4(), price: 150},
        {row: 2, place:9, free: true, id: uuidv4(), price: 150},
        {row: 2, place:10, free: true,id:uuidv4(), price: 150},
        {row: 2, place:11, free: true, id: uuidv4(), price: 150},
        {row: 2, place:12, free: true, id: uuidv4(), price: 150},
        {row: 2, place:13, free: true, id: uuidv4(), price: 150},
        {row: 2, place:14, free: true, id: uuidv4(), price: 150},
        {row: 3, place:1, free: true, id: uuidv4(), price: 150},
        {row: 3, place:2, free: true, id: uuidv4(), price: 150},
        {row: 3, place:3, free: true, id: uuidv4(), price: 150},
        {row: 3, place:4, free: true, id: uuidv4(), price: 150},
        {row: 3, place:5, free: false,id: uuidv4(), price: 150},
        {row: 3, place:6, free: true, id: uuidv4(), price: 150},
        {row: 3, place:7, free: false,id: uuidv4(), price: 150},
        {row: 3, place:8, free: true, id: uuidv4(), price: 150},
        {row: 3, place:9, free: true, id: uuidv4(), price: 150},
        {row: 3, place:10, free: true,id:uuidv4(), price: 150},
        {row: 3, place:11, free: true, id: uuidv4(), price: 150},
        {row: 3, place:12, free: true, id: uuidv4(), price: 150},
        {row: 3, place:13, free: true, id: uuidv4(), price: 150},
        {row: 3, place:14, free: true, id: uuidv4(), price: 150},
        {row: 4, place:1, free: true, id: uuidv4(), price: 150},
        {row: 4, place:2, free: true, id: uuidv4(), price: 150},
        {row: 4, place:3, free: true, id: uuidv4(), price: 150},
        {row: 4, place:4, free: true, id: uuidv4(), price: 150},
        {row: 4, place:5, free: false,id: uuidv4(), price: 150},
        {row: 4, place:6, free: true, id: uuidv4(), price: 150},
        {row: 4, place:7, free: false,id: uuidv4(), price: 150},
        {row: 4, place:8, free: true, id: uuidv4(), price: 150},
        {row: 4, place:9, free: true, id: uuidv4(), price: 150},
        {row: 4, place:10, free: true,id:uuidv4(), price: 150},
        {row: 4, place:11, free: true, id: uuidv4(), price: 150},
        {row: 4, place:12, free: true, id: uuidv4(), price: 150},
        {row: 4, place:13, free: true, id: uuidv4(), price: 150},
        {row: 4, place:14, free: true, id: uuidv4(), price: 150},
        {row: 5, place:1, free: true, id: uuidv4(), price: 150},
        {row: 5, place:2, free: true, id: uuidv4(), price: 150},
        {row: 5, place:3, free: true, id: uuidv4(), price: 150},
        {row: 5, place:4, free: true, id: uuidv4(), price: 150},
        {row: 5, place:5, free: false,id: uuidv4(), price: 150},
        {row: 5, place:6, free: true, id: uuidv4(), price: 150},
        {row: 5, place:7, free: false,id: uuidv4(), price: 150},
        {row: 5, place:8, free: true, id: uuidv4(), price: 150},
        {row: 5, place:9, free: true, id: uuidv4(), price: 150},
        {row: 5, place:10, free: true,id:uuidv4(), price: 150},
        {row: 5, place:11, free: true, id: uuidv4(), price: 150},
        {row: 5, place:12, free: true, id: uuidv4(), price: 150},
        {row: 5, place:13, free: true, id: uuidv4(), price: 150},
        {row: 5, place:14, free: true, id: uuidv4(), price: 150},
        {row: 6, place:1, free: true, id: uuidv4(), price: 150},
        {row: 6, place:2, free: true, id: uuidv4(), price: 150},
        {row: 6, place:3, free: true, id: uuidv4(), price: 150},
        {row: 6, place:4, free: true, id: uuidv4(), price: 150},
        {row: 6, place:5, free: false,id: uuidv4(), price: 150},
        {row: 6, place:6, free: true, id: uuidv4(), price: 150},
        {row: 6, place:7, free: false,id: uuidv4(), price: 150},
        {row: 6, place:8, free: true, id: uuidv4(), price: 150},
        {row: 6, place:9, free: true, id: uuidv4(), price: 150},
        {row: 6, place:10, free: true,id:uuidv4(), price: 150},
        {row: 6, place:11, free: true, id: uuidv4(), price: 150},
        {row: 6, place:12, free: true, id: uuidv4(), price: 150},
        {row: 6, place:13, free: true, id: uuidv4(), price: 150},
        {row: 6, place:14, free: true, id: uuidv4(), price: 150},
        {row: 7, place:1, free: true, id: uuidv4(), price: 150},
        {row: 7, place:2, free: true, id: uuidv4(), price: 150},
        {row: 7, place:3, free: true, id: uuidv4(), price: 150},
        {row: 7, place:4, free: true, id: uuidv4(), price: 150},
        {row: 7, place:5, free: false,id: uuidv4(), price: 150},
        {row: 7, place:6, free: true, id: uuidv4(), price: 150},
        {row: 7, place:7, free: false,id: uuidv4(), price: 150},
        {row: 7, place:8, free: true, id: uuidv4(), price: 150},
        {row: 7, place:9, free: true, id: uuidv4(), price: 150},
        {row: 7, place:10, free: true,id:uuidv4(), price: 150},
        {row: 7, place:11, free: true, id: uuidv4(), price: 150},
        {row: 7, place:12, free: true, id: uuidv4(), price: 150},
        {row: 7, place:13, free: true, id: uuidv4(), price: 150},
        {row: 7, place:14, free: true, id: uuidv4(), price: 150},

    ]
    const vipSeating = [
        {row: 8, place:1, free: true, id: uuidv4(), price: 250},
        {row: 8, place:2, free: true, id: uuidv4(), price: 250},
        {row: 8, place:3, free: true, id: uuidv4(), price: 250},
        {row: 8, place:4, free: true, id: uuidv4(), price: 250},
        {row: 8, place:5, free: true, id: uuidv4(), price: 250},
        {row: 8, place:7, free: true, id: uuidv4(), price: 250},
        {row: 8, place:8, free: true, id: uuidv4(), price: 250},
        {row: 8, place:9, free: true, id: uuidv4(), price: 250},
        {row: 8, place:10, free: true, id: uuidv4(), price: 250},
        {row: 8, place:11, free: true, id: uuidv4(), price: 250},
        {row: 8, place:12, free: true, id: uuidv4(), price: 250},
        {row: 8, place:13, free: true, id: uuidv4(), price: 250},
        {row: 8, place:14, free: true, id: uuidv4(), price: 250},

    ]
    const seats = seating.map(({seat}) => {
        return(
            <div className='seatingPlace'>{seat}</div>

        )
    })

    const VipSeats = vipSeating.map(({seat}) => {
        return(
            <div className='seatingPlaceVip'>{seat}</div>
        )
    })
    return(
        <div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 806 21" fill="#061420">
                <path d="M3.2,20l-2,0.2l-0.3-4l2-0.2C136.2,5.3,269.6,0,403,0s266.8,5.3,400.2,16l2,0.2l-0.3,4l-2-0.2 C669.5,9.3,536.3,4,403,4S136.4,9.3,3.2,20z"></path>
            </svg>
            <div className='screen'>Екран</div>
            <div className='seats'>
                {seats}
            </div>
            <div className='VipSeats'>
                {VipSeats}
            </div>

        </div>
    )
}


export default FilmSeatPlan;