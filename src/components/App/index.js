import React from "react";
import Film from "../pages/Film";
import MainPage from "../pages/MainPage";

import {Route, Routes, } from "react-router-dom";

import './index.css'



const App = () => {


    return (

        <Routes>
            <Route exact  path='/' element={<MainPage/>}/>
            <Route exact path='/film/*' element={<Film/>}/>

        </Routes>

    )
}

export default App;