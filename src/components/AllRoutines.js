import React, { useEffect, useState } from "react";
import { NavBar } from ".";
import { getAllPublicRoutines, getActivityById, deleteRoutine } from "../api";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function AllRoutines({ routines, setRoutines }) {
  const navigate = useNavigate();
  useEffect(() => {
    getAllPublicRoutines().then((result) => {
      setRoutines(result);
    });
  }, []);

  async function deleteMyRoutine(routineId) {
    const tokens = localStorage.getItem("token");
    const erase = await deleteRoutine(tokens, routineId);
    navigate("/MyRoutines");
    return erase;
  }

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

                {routine.activities.map((activity, indx) => {
                  return (
                    <div key={indx}>
                      <h5>Activity{activity.name}</h5>
                      <h5>Duration:{activity.duration}</h5>
                      <h5>Description:{activity.description}</h5>
                    </div>
                  );
                })}
                <button
                  onClick={() => {
                    deleteMyRoutine(routine.username);
                  }}
                  type="button"
                  id="deletePostButton"
                  className="btn btn-dark"
                >
                  Delete Post
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
