import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import {Register, Login, Home} from "./";



const App = () =>{
    return(
        
    <div><h1>Hello World</h1>
    <Routes>
        <Home/>
        <Route exact path = "/Register" element={<Register />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
    </Routes>
    </div>
    )
}

export default App;