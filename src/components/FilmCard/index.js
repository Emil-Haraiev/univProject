import React from "react";
import imdb from '../../assets/imdb.png';
import './index.css';


const FilmCard = (props) => {

    const {item} = props;
    return(
         <div className='card'>
             <div className='filmCard'>
                 <div className='cardFront'>
                     <a href='#'>
                         <img className='cardImg' src={item.img} alt={item.name}/>
                     </a>
                     <div className='filmFormat'>{item.format}</div>
                     <div className='filmAge'>{item.age}</div>
                 </div>
                 <div className='cardBack'>
                     <div className='cardName'>{item.name}</div>
                     <div className='filmRating'>
                         <img className='cardRating' src={imdb} alt='imdb'/>
                         <div className='filmRatingTo'>{item.rate}</div>
                         <div className='filmRatingFrom'>/10</div>
                     </div>
                     <div className='filmInfo'>
                         <div className='genre'>Жанр</div>
                         <div className='filmGenre'>{item.genre}</div>
                         <div className='director'>Режисер</div>
                         <div className='filmDirector'>{item.director}</div>
                     </div>
                     <div className='rental'>{item.date}</div>
                     <div className='filmTechs'>{item.tech}</div>
                 </div>
             </div>
         </div>
    )
}

export default FilmCard;