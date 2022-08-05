import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { UpdateActivities} from "../api"



export default function UpdateActivity({routineActivityId}) {
    const [count, setCount] = useState("");
    console.log(count)
    const [duration, setDuration] = useState("");
    


    const handleSubmit = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token");
    const newActivity = await UpdateActivities(duration,count,routineActivityId,token);
        setCount('')
        setDuration('')
        return newActivity;
    }
    return(
    <div>
    <h3>Update a Routine Activity</h3>
    <form onSubmit={handleSubmit}>
        <input type ="text"
        placeholder="count"
        value={count}
        onChange={(event) => setCount(event.target.value)}/>
        <input type ="text"
        placeholder="duration"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}/>
        <button type="submit">Update Activity</button>
    </form>
    </div>
    )
}