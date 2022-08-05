import React, { useEffect, useState } from "react";
import { NavBar} from ".";
import { getAllPublicRoutines } from "../api";





export default function AllRoutines({ routines, setRoutines }) {
  useEffect(() => {
    getAllPublicRoutines().then((result) => {
      setRoutines(result);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Routines and Activities</h2>
      <div id="container">
        {routines.map((routine, index) => {
          return (
            <div id="routinesContainer">
              <div key={`AllRoutines${index}`}>
                <h3>Posted By: {routine.creatorName.toUpperCase()}</h3>
                <h5>Goal:{routine.goal}</h5>
                <h5>Routine: {routine.name}</h5>
                {routine.activities.map((activity, indx) => {
                      const routineActivityId = activity.routineActivityId
                      console.log(routineActivityId, "this is routineActivityId!!!!!")
                  return (
                    <div key={`RoutineActivitiesAllRoutines${indx}`}>
                      <h5>Activity{activity.name}</h5>
                      <h5>Duration:{activity.duration}</h5>
                      <h5>Count:{activity.count}</h5>
                      <h5>Description:{activity.description}</h5>
                    </div>
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}