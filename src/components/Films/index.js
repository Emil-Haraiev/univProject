import React from "react";
import FilmCard from "../FilmCard";
import './index.css';


const Films = (props) => {
    const {films, activeDay} = props;
    return (
        <div className='cardsWrapper'>
            {films.map(({date, films}) =>{
                if(activeDay === date){
                        return(
                            films.map((item, index) => {
                                return (
                                    <FilmCard key={index} item={item}/>
                                )
                            })
                        )
                }
            })}
        </div>
    )
}


export default Films;