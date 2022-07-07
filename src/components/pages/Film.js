import SeatReservation from "../SeatReservation";
import FilmSeatPlan from "../FilmSeatPlan";
import React, {useEffect} from "react";
import FilmReservInfo from "../FilmReservInfo";
import './index.css';
import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import Modal from "../Modal";


const Film = () =>{
    const seating = [];
    const [selectedItems, setSelectedItems] = useState([]);
    const [tempSeating, setTempSeating] = useState(seating)
    const [modalActive, setModalActive] = useState(false)


    useEffect(()=>{
        const tickets = localStorage.getItem('tickets')

        if(!tickets){
            localStorage.setItem('tickets', JSON.stringify([]))
        }else{
            const savedTickets = JSON.parse(localStorage.getItem('tickets'))
            setSelectedItems(savedTickets)

        }
    },[])

    const handleBooking = () => {
        const busy = selectedItems.map(item => {
            return{
                ...item,
                busy: true
            }
        })
        const tickets = JSON.parse(localStorage.getItem('tickets'));
        const a = [...busy,...tickets ];
        localStorage.setItem('tickets', JSON.stringify(a))
        setModalActive(true)
        setSelectedItems([])
    }


    function placePerRow (row, place){
      for(let i = 1; i <= row; i++){
          for(let j = 1; j <= place; j++){
              seating.push(
                  {row: i, place: j, busy: false, reserved: false, id: uuidv4(), price: 150}
              )
          }
      }

    }


    const handleSelect = (seat) => {
        const isExist =  selectedItems.find(item => item.id === seat.id ? item : null )
        if(isExist) {
            setSelectedItems(selectedItems.filter(item => item.id !== seat.id))
        }else{
            setSelectedItems(prevState => [...prevState, seat])
        }
        const newSeatings = tempSeating.map(item =>  item.id === seat.id ? {...item, reserved: !item.reserved} : {...item, reserved: item.reserved})
        setTempSeating(newSeatings)

    }
    return(
        <>
            <div className='filmWrapper'>
                <FilmReservInfo />
                <FilmSeatPlan  selectedItems={selectedItems} seating = {seating}  placePerRow = {placePerRow(7, 14)} handleSelect={handleSelect} tempSeating={tempSeating}/>
            </div>
            <SeatReservation selectedItems={selectedItems} tempSeating ={tempSeating} handleBooking={handleBooking}  setModalActive= {setModalActive} setSelectedItems = {setSelectedItems}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </>
    )
}

export default Film;