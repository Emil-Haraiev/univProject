import React, {useMemo} from "react";
import {useState} from "react";
import './index.css'
import {vipSeating} from '../../constants';
import {seating} from '../../constants';

const FilmSeatPlan = () => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [tempSeating, setTempSeating] = useState(seating)

    const handleSelect = (seat) => {
        setSelectedItem(prevState => [...prevState, seat])
        const newSeatings = tempSeating.map(item =>  item.id === seat.id ? {...item, free: !item.free} : {...item, free: item.free})
        setTempSeating(newSeatings)

    }
    console.log(selectedItem)
    const seats = useMemo(()=> tempSeating.map((seat, i) => {
        const isFree = seat.free;
        const styles = {pointerEvents: !isFree ? 'none' : 'auto', backgroundColor: !isFree ? 'gray' : 'deepskyblue'}
        return(
            <div className='seatingPlace' key={i} onClick={() => handleSelect(seat)}
                 style={styles}>{selectedItem.place}</div>

        )
    }),[tempSeating ])

    const VipSeats = vipSeating.map(({seat, i}) => {
        return(
            <div className='seatingPlaceVip' key={i}>{seat}</div>
        )
    })
    return(
        <div className='FilmSeatPlanWrapper'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 806 21" fill="#061420" className='screenImg'>
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


