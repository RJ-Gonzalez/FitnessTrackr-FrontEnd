import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import {Register, Login, Home,AllRoutines} from "./";



const App = () =>{
    return(
        
    <div>
       <Home/>
    <Routes>
        <Route exact path = "/Register" element={<Register />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/AllRoutines" element={<AllRoutines />}></Route>
    </Routes>
    </div>
    )
}

export default App;