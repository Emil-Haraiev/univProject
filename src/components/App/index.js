import React from "react";
import Films from "../Films";
import cards from "../../constants";
import TechFilter from "../TechFilter";
import DateFilter from "../DateFilter";
import FilmSeatPlan from "../FilmSeatPlan";


const App = () => {
    return (
            <>
               {/*<DateFilter/>*/}
               {/* <TechFilter/>*/}
                <Films films = {cards}/>
                <FilmSeatPlan/>
            </>
    )
}

export default App;