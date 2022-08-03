import React,{useEffect,useState} from 'react';
import {getAllRoutinesByUser, userRoutines, connectProfile} from "../api"
import { Link } from "react-router-dom";

//potentiall make a profile page just like stranger things? Will have to double check.

const MyRoutines = () => {
  let token = "";
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const response = await connectProfile(token);
      setMyInfo(response);
    }
    getMyInfo();
  }, []);
    // const token = localStorage.getItem("token");
    // useEffect(() => {
    //     async function showRoutine(token) {
    //       const showMyRoutine= await getAllRoutinesByUser(token);
    //       setMyRoutine(showMyRoutine);
    //     }
    //     showRoutine(token);
    //     console.log(showRoutine, "this is how routine!!")
    //   }, []);
    return(
        <div>
        <h3 className="welcome">Welcome {myInfo.username}</h3>
        <Link to="/CreateRoutines">
        <button id="allButton" type="button" className="btn btn-dark">
          Create New Post
        </button>
      </Link>
        </div>
    )
}

export default MyRoutines;