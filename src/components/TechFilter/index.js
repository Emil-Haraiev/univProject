import React from "react";
import './index.css';


const TechFilter = () => {
    const buttonsData = [
        {name:'cinet', label: 'CINETECH+'},
        {name:'lux', label: 'RE`LUX'},
        {name:'dx', label: '4DX'},
        {name:'imax', label: 'IMAX'}
    ]



    const buttons = buttonsData.map(({name, label}) => {
        // const active = props.filter === name;
        // const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    // className={`btn ${clazz}`}
                    key={name}
                    // onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className='filterWrapper'>
            <div>Технологія:</div>
            <div className="btn-group">
                {buttons}
            </div>
        </div>
   )

}



export default TechFilter;