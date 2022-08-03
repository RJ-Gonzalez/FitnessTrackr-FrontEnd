import React,{useEffect,useState} from 'react';
import {userRoutines, connectProfile} from "../api"
import { Link } from "react-router-dom";



const MyRoutines = ({myRoutine, setMyRoutine, myInfo, setMyInfo}) => {
  let token = "";

  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const response = await connectProfile(token);
      console.log(response, "this is respone from My ROUTINES!!!!")
      setMyInfo(response);
      
    }
    getMyInfo();
  }, []);

//working on mapping through username routines.
  console.log(myRoutine, "this is myInfo!!!")
  const myRoutineMapping =
    myRoutine.creatorName && myInfo.creatorName.name && myInfo.creatorName.name.length ? (
      myInfo.creatorName.name.map((element, index) => {
        return (
          <div key={`Profile${index}`}>
            <div className="card" style={{ width: 700 }}>
              <div className="card-body">
                <div id="inboxMessage">
                  <h4>From: {element.fromUser.username}</h4>
                  <h4>Response to Post: {element.post.title}</h4>
                  <h4>Message: {element.content}</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h2>No messages to display</h2>
    );
    return(
        <div>
        <h3 className="welcome">Welcome {myInfo.username}</h3>
        {myInfo}
        <Link to="/CreateRoutines">
        <button id="allButton" type="button" className="btn btn-dark">
          Create New Post
        </button>
      </Link>
            <Link to="/Logout">
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