import React, { useEffect } from "react";
import { connectProfile, userRoutines } from "../api";
import { Link } from "react-router-dom";
import { NavBar, ActivityDropDown } from ".";
import UpdateRoutine from "./UpdateRoutine";
import UpdateActivity from "./UpdateActivity";
import DeleteRoutine from "./DeleteRoutine";
import DeleteActivity from "./DeleteActivity";
import Footer from "./Footer";

const MyRoutines = ({
  myInfo,
  setMyInfo,
  myRoutine,
  setMyRoutine,
  activityId,
}) => {
  const authToken = localStorage.getItem("token") ? true : false;

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getMyInfo() {
      const response = await connectProfile(token);
      setMyInfo(response);
    }
    getMyInfo();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    async function getMyRoutines() {
      const response = await userRoutines(token, username);
      setMyRoutine(response);
    }
    getMyRoutines();
  }, []);
  return (
    <div id="MyRoutineContainer">
      <div>
        <NavBar />
      </div>
      {authToken === true ? (
        <h1 className="welcome">Welcome To Your Routines: {myInfo.username}</h1>
      ) : (
        <Link to="./AllRoutines">Back to All Routines</Link>
      )}
      <div id="my">
        <Link to="/CreateRoutines">
          <button id="allButton" type="button" className="btn btn-dark">
            Create New Routine!
          </button>
        </Link>
        <Link to="/CreateActivity">
          <button id="allButton" type="button" className="btn btn-dark">
            Create New Activity!
          </button>
        </Link>
        <Link to="/">
          <button
            id="allButton"
            type="button"
            className="btn btn-dark"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Log Out
          </button>
        </Link>
        {myRoutine.map((element, index) => {
          return (
            <div key={`myRoutines${index}`} id="routinesContainers">
              <h2 id="MyTitle">Active Routine</h2>
              <h4 id="subTitles">Creator: {element.creatorName}</h4>
              <h4 id="subTitles">Routine: {element.name}</h4>
              <h4 id="subTitles">Goal: {element.goal}</h4>
              <UpdateRoutine routineId={element.id} />
              <DeleteRoutine routineId={element.id} />
              {element.activities.map((activity, index) => {
                let actvityid = activity.id;
                return (
                  <div key={`myroutines${index}`}>
                    <h2 id="MyTitle">Active Activity</h2>
                    <h4 id="subTitles">Activity Name:{activity.name}</h4>
                    <h5 id="subTitles">Description: {activity.description}</h5>

                    <h5 id="subTitles">Duration: {activity.duration}</h5>
                    <h5 id="subTitles">Count:{activity.count}</h5>
                    <h5 id="subTitles">
                      Routine Activity ID: {activity.routineActivityId}
                    </h5>

                    <DeleteActivity
                      routineActivityId={activity.routineActivityId}
                    />
                    <UpdateActivity
                      routineActivityId={activity.routineActivityId}
                    />
                  </div>
                );
              })}
              <ActivityDropDown routineId={element.id} />
            </div>
          );
        })}
        ;
      </div>

      <Footer />
    </div>
  );
};

export default MyRoutines;
