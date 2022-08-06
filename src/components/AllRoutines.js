import React, { useEffect} from "react";
import { NavBar} from ".";
import { getAllPublicRoutines } from "../api";
import Footer from "./Footer";






export default function AllRoutines({ routines, setRoutines }) {
  useEffect(() => {
    getAllPublicRoutines().then((result) => {
      setRoutines(result);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <h2 id="AllRoutines">Routines and Activities</h2>
      <div id="container">
        {routines.map((routine, index) => {
          return (
            <div id="routinesContainer">
              <div key={`AllRoutines${index}`}>
                <h3 className="name">User: {routine.creatorName.toUpperCase()}</h3>
                <h5 className="description">Goal:</h5>
                <p>{routine.goal}</p>
                <h5 className="description">Routine: </h5>
                <p>{routine.name}</p>
                {routine.activities.map((activity, indx) => {
                      const routineActivityId = activity.routineActivityId
                  return (
                    <div key={`RoutineActivitiesAllRoutines${indx}`}>
                      <h5 className="description">Activity:</h5>
                      <p>{activity.name}</p>
                      <h5 className="description">Duration:</h5>
                      <p>{activity.duration}</p>
                      <h5 className="description">Count:</h5>
                      <p>{activity.count}</p>
                      <h5 className="description">Description:</h5>
                      <p>{activity.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}