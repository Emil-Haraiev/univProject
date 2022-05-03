import React from "react";
import DoctorStrange from '../../assets/Doctor-Strange.jpg';
import imdb from '../../assets/imdb.png';
import './index.css';


const FilmCard = () => {
    return(
         <div className='card'>
             <div className='filmCard'>
                 <div className='cardFront'>
                     <a href='#'>
                         <img className='cardImg' src={DoctorStrange} alt='Doctor-Strange'/>
                     </a>
                     <div className='filmFormat'>2D</div>
                     <div className='filmAge'>16+</div>
                 </div>
                 <div className='cardBack'>
                     <div className='cardName'>Доктор Стрендж у мультивсесвіті божевілля</div>
                     <div className='filmRating'>
                         <img className='cardRating' src={imdb} alt='imdb'/>
                         <div className='filmRatingTo'>4.4</div>
                         <div className='filmRatingFrom'>/10</div>
                     </div>
                     <div className='filmInfo'>
                         <div className='genre'>Жанр</div>
                         <div className='filmGenre'>екшн, фантастика, Marvel, супергерой</div>
                         <div className='director'>Режисер</div>
                         <div className='filmDirector'>Сем Реймі</div>
                     </div>
                     <div className='rental'>З 05 травня 2022</div>
                     <div className='filmTechs'>Cinetech+</div>
                 </div>
             </div>
         </div>
    )
}

export default FilmCard;