import React,{useEffect} from 'react';
import {  connectProfile, userRoutines} from "../api"
import { Link} from "react-router-dom";
import { NavBar, ActivityDropDown } from ".";
import UpdateRoutine from "./UpdateRoutine";
import DeleteRoutine from "./DeleteRoutine";





const MyRoutines = ({ myInfo, setMyInfo, myRoutine, setMyRoutine}) => {
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
      const response = await  userRoutines(token,username);
      setMyRoutine(response);
      
    }
    getMyRoutines();
  }, []);
    return(
        <div id = "MyRoutineContainer">
            <div>
                 <NavBar/>
            </div>
            {authToken === true ? (
        <h1 className="welcome">Welcome To Your Routines: {myInfo.username}</h1>
        ):  <Link to ="./AllRoutines">Back to All Routines</Link>}
        <div id="my">
        {myRoutine.map((element, index) => {
          console.log(myRoutine)
        return (
          <div key={`myRoutines${index}`}>
                 <h2>Active Routine</h2>
                  <h4>Creator: {element.creatorName}</h4>
                  <h4>Routine: {element.name}</h4>
                  <h4>Goal: {element.goal}</h4>
                <DeleteRoutine routineId = {element.id}/>
                <UpdateRoutine routineId = {element.id}/>
            {element.activities.map((activity, index)=>{
              let actvityid = activity.id
              
              return(
                <div key={`myroutines${index}`}>
                 <h2>Active Activity</h2>
                  <h4>Activity Name:{activity.name}</h4>
                  <h5>Description: {activity.description}</h5>
                  <h5>Duration: {activity.duration}</h5>
                  <h5>Count:{activity.count}</h5>
                </div>
              )
            })}
          <ActivityDropDown routineId = {element.id}/>
                </div>
        );
        }
    )};
        </div>
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
        </div>
    )
}

export default MyRoutines;
