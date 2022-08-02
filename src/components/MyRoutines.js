import React,{useEffect} from 'react';
import {getAllRoutinesByUser, userRoutines} from "../api"
import { Link } from "react-router-dom";



const MyRoutines = (myRoutine, setMyRoutine) => {
    
    const token = localStorage.getItem("token");
    useEffect(() => {
        async function showRoutine(token) {
          const showMyRoutine= await getAllRoutinesByUser(token);
          setMyRoutine(showMyRoutine);
        }
        showRoutine(token);
        console.log(showRoutine, "this is how routine!!")
      }, []);
    return(
        <div>
        <h3 className="welcome">Welcome {myRoutine.username}</h3>
        <Link to="/CreateRoutines">
        <button id="allButton" type="button" className="btn btn-dark">
          Create New Post
        </button>
      </Link>
        </div>
    )
}

export default MyRoutines;