import React from "react";
import './index.css';


const TechFilter = () => {
    // const buttonsData = [
    //     {name:'cinet', label: 'CINETECH+'},
    //     {name:'lux', label: 'RE`LUX'},
    //     {name:'dx', label: '4DX'},
    //     {name:'imax', label: 'IMAX'}
    // ]


    return(
        <div className='allButtons'>
            <div>Техологія:</div>
            <button>Cinetech+</button>
            <button>RE`LUX</button>
            <button>4DX</button>
            <button>IMAX</button>
        </div>
    )

}



export default TechFilter;