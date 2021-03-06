import React from "react";
import FilmCard from "../FilmCard";
import './index.css';
import {Link} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";


const Films = (props) => {
    const {films, activeDay} = props;
    return (
        <>
            <div className='cardsWrapper'>
                {films.map(({date, films}) =>{
                    if(activeDay === date){
                        return(
                            films.map((item, index) => {
                                return (
                                    <FilmCard activeDay = {activeDay} date={date} key={index} item={item}/>

                                )
                            })
                        )
                    }
                })}
            </div>
            <div className='ukraine'></div>
        </>
    )
}


export default Films;