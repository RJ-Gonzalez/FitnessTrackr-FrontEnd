import React,{useEffect} from "react";
import { getAllActivities} from "../api";
import { NavBar } from ".";
import { Link} from "react-router-dom";
import Footer from "./Footer";



const AllActivities = ({activities, setActivities}) => {

    useEffect(() => {
        getAllActivities().then((result) => {
          setActivities(result);
        });
      }, []);
      const activityMapping = activities.map((activity,id) => {
        return (
          <div key={id} id="routinesContainer">
            <h3 className="name">Name of Activity:</h3>
            <p>{activity.name}</p>
            <h5 className="description">Description:</h5>
            <p>{activity.description}</p>
          </div>
        );
      });
    return(
<div>
<NavBar/>
<div className="btn">
<Link to="/CreateActivity">
        <button id="allButton" type="button" className="btn btn-dark">
          Create New Activity!
        </button>
      </Link>
      </div>
<div id="container">
    {activityMapping}
   </div>
   <Footer/>
</div>
    )
}

export default AllActivities