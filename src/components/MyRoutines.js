import React,{useEffect,useState} from 'react';
import { createRoutine, connectProfile, userRoutines} from "../api"
import { Link } from "react-router-dom";
import { NavBar } from ".";



const MyRoutines = ({ myInfo, setMyInfo, myRoutine, setMyRoutine}) => {
   

  useEffect(() => {
   const token = localStorage.getItem("token");
    async function getMyInfo() {
      const response = await connectProfile(token);
      console.log(response, "this is respone from My ROUTINES!!!!")
      setMyInfo(response);
      
    }
    getMyInfo();
  }, []);

  useEffect(() => {
   const token = localStorage.getItem("token");
   console.log(token)
   const username = localStorage.getItem("username");
    async function getMyRoutines() {
      const response = await  userRoutines(token,username);
      console.log(response, "this is respone from My ROUTINES!!!!")
      setMyRoutine(response);
      
    }
    getMyRoutines();
  }, []);


  
  
    return(
        <div>
            <div>
                 <NavBar/>
            </div>
        <h3 className="welcome">Welcome {myInfo.username}</h3>
        <div>
        {myRoutine.map((element, index) => {
            console.log(element)
        return (
          <div key={`myRoutines${index}`}>
            <div className="card" style={{ width: 700 }}>
              <div className="card-body">
                <div id="inboxMessage">
                  <h4>From: {element.username}</h4>
                  <h4>Name of routine: {element.name}</h4>
                  <h4>Description: {element.description}</h4>
                </div>
              </div>
            </div>
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
