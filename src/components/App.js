import React,{useState} from "react";
import { Route, Link, Routes } from "react-router-dom";
import {Register, Login, Home, AllRoutines, AllActivities} from "./";



const App = () =>{
    const [routines,setRoutines] = useState([])
    const [activities, setActivities] = useState([])
    return(
        
    <div>
       {/* <Home/> */}
    <Routes>
        
        <Route exact path = "/Register" element={<Register />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/AllRoutines" element={<AllRoutines routines={routines} setRoutines={setRoutines}/>}></Route>
        <Route exact path="/AllActivities" element={<AllActivities activities={activities} setActivities={setActivities}/>}></Route>
    </Routes>
    </div>
    )
}

export default App;