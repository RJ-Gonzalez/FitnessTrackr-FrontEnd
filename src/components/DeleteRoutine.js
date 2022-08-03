import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { deleteRoutine} from "../api";




export default function  DeleteRoutine ({routineId}){
    const navigate = useNavigate()
    async function deleteMyRoutine() {
        const tokens = localStorage.getItem("token");
        const erase = await deleteRoutine(tokens, routineId);
        navigate("/MyRoutines");
        return erase;
      }
    return (
        <button
        onClick={() => {
          deleteMyRoutine();
        }}
        type="button"
        id="deletePostButton"
        className="btn btn-dark">
        Delete Post
      </button>
    )
}

