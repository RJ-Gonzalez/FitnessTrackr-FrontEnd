import React,{useEffect,useState} from 'react';
import {getAllRoutinesByUser, userRoutines, connectProfile} from "../api"
import { Link } from "react-router-dom";



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
  
    return(
        <div>
        <h3 className="welcome">Welcome {myInfo.username}</h3>
        {myInfo.data.map((info)=>{

        })}
        <Link to="/CreateRoutines">
        <button id="allButton" type="button" className="btn btn-dark">
          Create New Post
        </button>
      </Link>
        </div>
    )
}

export default MyRoutines;