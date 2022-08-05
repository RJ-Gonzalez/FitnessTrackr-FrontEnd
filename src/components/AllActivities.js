import React,{useEffect} from "react";
import { getAllActivities} from "../api";
import { NavBar } from ".";

const AllActivities = ({activities, setActivities}) => {

    useEffect(() => {
        getAllActivities().then((result) => {
          setActivities(result);
        });
      }, []);

     const activityMapping = activities.map((activity,id) => {
        return (
          <div key={id} id="routinesContainer">
             <h2>ID:{activity.id}</h2>
            <h3>Name of Activity:{activity.name}</h3>
            <h5>Description:{activity.description}</h5>
          </div>
        );
      });
    return(
<div>
  
<NavBar/>
<div id="container">
    {activityMapping}
   </div>
</div>
    )
}

export default AllActivities