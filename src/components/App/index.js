import React from "react";
import Film from "../pages/Film";
import MainPage from "../pages/MainPage";

import {Route, Routes} from "react-router-dom";

import './index.css'



const App = () => {


    return (

        <Routes>
            <Route path='/film' element={<Film/>}/>
            <Route path='/' element={<MainPage/>}/>

        </Routes>

    )
}

export default App;