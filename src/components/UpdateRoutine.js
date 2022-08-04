import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { UpdateRoutines} from "../api"



export default function UpdateRoutine({routineId}) {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(true)


    const handleSubmit = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token");
    const newRoutines = await UpdateRoutines(name, goal, isPublic,routineId,token);
        setName('')
        setGoal('')
        return newRoutines;
    }
    return(
    <div>
    <h3>Update a Routine</h3>
    <form onSubmit={handleSubmit}>
        <input type ="text"
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}/>
        <input type ="text"
        placeholder="goal"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}/>
        <button type="submit">Update Routine</button>
    </form>
    </div>
    )
}