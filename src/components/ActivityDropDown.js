import React, { useEffect, useState } from "react";
import { getAllPublicRoutines, createRoutineActivity,getAllActivities } from "../api";

const AllActivities = ({ routineId }) => {
  const [activities, setActivities] = useState([]);
  const [addActivity, setAddActivity] = useState({});
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [activityId, setActivityId] = useState("")
  const [allActivities, setAllActivities] = useState([])
  const [id, setId] = useState("")



  useEffect(() => {
    getAllActivities().then((result) => {
      setActivities(result);
    });
  }, []);

  const getActivities = async () =>{
    const allActivities = await getAllActivities()
    return setAllActivities(allActivities)
  }
  useEffect(() => {
    getActivities();
  }, []);
  

  const handler = async (event) => {
    event.preventDefault();
    setActivityId(event.target.value);
    const activities = [...allActivities];
    const activity = activities.filter(
      (element) => element.name === event.target.value
    );
    const activityId = activity[0].id;
    console.log(activityId, "THIS IS ACTIVITY ID")
    setId(activityId);
    return setId
  };


  async function handleSubmit(event) {
    event.preventDefault();
    const result = await createRoutineActivity(
      routineId,
      setId,
      count,
      duration
    );
    setCount('')
    setDuration('')
    console.log(result, "this is RESULT FROM DRPDOWN")
    return result;
  }


  return (
    <div>
      <div>Add Activities</div>
      <form onSubmit={handleSubmit}>
        <select onChange={handler}>
          <option>Choose Your Activity</option>
          {activities.map((activity, id) => {
            return <option key={activity.id}>{activity.name}</option>;
          })}
        </select>
        <button>Add Activity</button>
      </form>
    </div>
  );
};

export default AllActivities;
