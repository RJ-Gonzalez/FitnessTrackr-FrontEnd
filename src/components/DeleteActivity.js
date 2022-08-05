import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { deleteRoutine} from "../api";




export default function  DeleteActivity ({routineActivityId}){
    const navigate = useNavigate()
    async function deleteMyActivity() {
        const tokens = localStorage.getItem("token");
        const erase = await deleteRoutine(tokens, routineActivityId);
        navigate("/MyRoutines");
        return erase;
      }
    return (
        <button
        onClick={() => {
          deleteMyActivity();
        }}
        type="button"
        id="deletePostButton"
        className="btn btn-dark">
        Delete Activity
      </button>
    )
}

