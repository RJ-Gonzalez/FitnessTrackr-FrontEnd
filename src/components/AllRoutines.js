import React, { useEffect, useState } from "react";
import { getAllPublicRoutines,getActivityById } from "../api";
// import { useNavigate } from "react-router-dom";

import "./style.css";

export default function AllRoutines({ routines, setRoutines}) {
//   const navigate = useNavigate();
useEffect(() => {
    getAllPublicRoutines().then((result) => {
      setRoutines(result);
    });
  }, []);
//   const routineMapping = routines.map((routine, index) => {
//     return (
//       <div key={index}>
     
//         <h5>Username:{routine.creatorName}</h5>
//         <h5>Goal:{routine.goal}</h5>
//         <h5>Name of routine:{routine.name}</h5>
//     {/* {activityMapping = routine.index.map((activity, index)=>{
//     return(
//       <div key = {index}>
//         <h6> {activity.name}</h6>
//         <h6> {activity.duration}</h6>
//         <h6> {activity.description}</h6>
//       </div>
//     )
//   })} */}
//       </div>
//     );
//   });
// console.log(routineMapping, "this is routine Mapping!")

//   {routine.activities.map((activity, index) => {
//     return (
//       <div key={index}>
//         <h3>Name of Activity:{activity.name}</h3>
//         <h5>Description:{activity.description}</h5>
//         <h5>Duration:{activity.duration}</h5>
//       </div>
//     );
//   })};


  return (
    <div>
      <h2>Routines and Activities</h2>
      <div id = "container">
        {routines.map((routine, index) => {
    return (
      <div id = "routinesContainer">
      <div key={index}>
        
        <h3>Posted By: {routine.creatorName.toUpperCase()}</h3>
        <h5>Goal:{routine.goal}</h5>
        <h5>Routine: {routine.name}</h5>      


     
     {routine.activities.map((activity, index) => {
    return (
      <div key={index}>
        <h5>Activity{activity.name}</h5>
        <h5>Duration:{activity.duration}</h5>
        <h5>Description:{activity.description}</h5>
      </div>
    )
    })}

    </div>
    </div>
    )})}
    </div>
       </div>    

  )
}




