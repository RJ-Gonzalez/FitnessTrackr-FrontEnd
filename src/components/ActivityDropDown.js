import React, { useEffect, useState } from "react";
import { getAllPublicRoutines, createRoutineActivity} from "../api";

const AllActivities = ({ routineId }) => {
  const [activities, setActivities] = useState([]);
  const [count, setCount] = useState('');
  const [duration, setDuration] = useState('');
  const [activityId, setActivityId] = useState({})
  const [allActivities, setAllActivities] = useState([])
  const [id, setId] = useState()



  useEffect(() => {
    getAllPublicRoutines().then((result) => {
      setActivities(result);
    });
  }, []);

  const getActivities = async () =>{
    const allActivities = await getAllPublicRoutines()
    return setAllActivities(allActivities)
  }
  useEffect(() => {
    getActivities();
  }, []);
  

  const handler = async (event) => {
    event.preventDefault();
    setId(event.target.value);
    const activities = [...allActivities];
    const activity = activities.filter(
      (element) => element.name === event.target.value
    );
    const activityId = activity[0].id
    setActivityId(activityId);
    return setId
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const result = await createRoutineActivity(
      token,
      routineId,
      activityId,
      count,
      duration
    );
    setCount('')
    setDuration('') //cannot use letters only numbers.
    return result;
  }


  return (
    <div>
      <div>Add Activities</div>
      
      <form onSubmit={handleSubmit}>
      <input type ="text"
        placeholder="count"
        value={count}
        onChange={(event) => setCount(event.target.value)}/>
        <input type ="text"
        placeholder="duration"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}/>
        <select onChange={handler}>
          
          <option>Choose Your Activity</option>
          
          {activities.map((activity, id) => {
            return <option key={`ActivityDropDown${id}`}>{activity.name}</option>;
          })}
        </select>
        <button>Add Activity</button>
      </form>
    </div>
  );
};

export default AllActivities;

