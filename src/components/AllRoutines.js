import React, { useEffect, useState } from "react";
import { NavBar } from ".";
import { getAllPublicRoutines } from "../api";
import { useNavigate } from "react-router-dom";
import DeleteRoutine from "./DeleteRoutine";

import "./style.css";

export default function AllRoutines({ routines, setRoutines }) {
  const navigate = useNavigate();
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
              <div key={index}>
                <h3>Posted By: {routine.creatorName.toUpperCase()}</h3>
                <h5>Goal:{routine.goal}</h5>
                <h5>Routine: {routine.name}</h5>
                <DeleteRoutine routineId = {routine.id}/>
                {routine.activities.map((activity, indx) => {
                  return (
                    <div key={indx}>
                      <h5>Activity{activity.name}</h5>
                      <h5>Duration:{activity.duration}</h5>
                      <h5>Description:{activity.description}</h5>

                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
