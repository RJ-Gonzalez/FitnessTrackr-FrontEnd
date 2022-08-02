import React,{useState} from "react";
import { Route, Link, Routes } from "react-router-dom";
import {Register, Login, Home, AllRoutines, AllActivities,MyRoutines} from "./";



const App = () =>{
    const [routines,setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [myRoutine, setMyRoutine] = useState('');
    return(
        
    <div>
       {/* <Home/> */}
    <Routes>
        
        <Route exact path = "/Register" element={<Register />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/AllRoutines" element={<AllRoutines routines={routines} setRoutines={setRoutines}/>}></Route>
        <Route exact path="/AllActivities" element={<AllActivities activities={activities} setActivities={setActivities}/>}></Route>
        <Route exact path="/MyRoutines" element={<MyRoutines myRoutine={myRoutine} setMyRoutine={setMyRoutine} />}></Route>
    </Routes>
    </div>
    )
}

export default App;