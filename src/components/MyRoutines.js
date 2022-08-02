import React,{useEffect} from 'react';
import {getAllRoutinesByUser} from "../api"


const MyRoutines = (myRoutine, setMyRoutine) => {
    
    const token = localStorage.getItem("token");
    useEffect(() => {
        async function showRoutine(token) {
          const showMyRoutine= await getAllRoutinesByUser(token);
          setMyRoutine(showMyRoutine);
        }
        showRoutine(token);
      }, []);
    return(
        <div>
        <h3 className="welcome">Welcome {myRoutine.username}</h3>
        </div>
    )
}

export default MyRoutines;