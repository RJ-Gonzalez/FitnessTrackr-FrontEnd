import React, { useEffect, useState } from "react";
import { getAllPublicRoutines, createRoutineActivity } from "../api";

const AllActivities = ({ routineId }) => {
  const [activities, setActivities] = useState([]);
  const [addActivity, setAddActivity] = useState({});

  console.log(activities, "THIS IS ACTIVITIES");


  useEffect(() => {
    getAllPublicRoutines().then((result) => {
      setActivities(result);
    });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await createRoutineActivity(
      routineId,
      activityId,
      count,
      duration
    );
    return result;
  }

  return (
    <div>
      <div>Add Activities</div>
      <form onSubmit={handleSubmit}>
        <select onChange={(event) => setAddActivity(event.target.value)}>
          <option>Choose Your Activity</option>
          {activities.map((activity, id) => {
            return <option key={id}>{activity.name}</option>;
          })}
        </select>
        <button>Add Activity</button>
      </form>
    </div>
  );
};

export default AllActivities;
