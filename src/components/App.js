import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import {Register, Login, Home} from "./";



const App = () =>{
    return(
        
    <div>
        <h6>Just here for App reference</h6>
    <Routes>
        <Route exact path = "/Register" element={<Register />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
    </Routes>
    </div>
    )
}

export default App;