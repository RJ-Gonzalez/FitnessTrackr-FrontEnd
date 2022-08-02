import React,{ useEffect, useState} from "react";
import {getAllPublicRoutines} from "../api";
import { useNavigate } from "react-router-dom";




export default function AllRoutines(){
    const navigate = useNavigate();
    const [routines,setRoutines] = useState([])
    // const authToken = localstorage.getItem("token")? true:false;
    useEffect(() => {
        getAllPublicRoutines()
          .then((response) => {
            const routines = response.data.routines;
            setRoutines(routines);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    //   const routineMapping = routines.map((routine) => {
    //     let routineId = routine.id;
    //     return(
    //         <div key = {routineId}>
             
    //         </div>
    //     )
    

  
    // })    


    return(
    <div>
         <h1>This is all routines</h1>
         <h5>{routines.creatorName}</h5>
                <h5>{routines.goal}</h5>
                <h5>{routines.name}</h5>
         </div>
        )

    }

