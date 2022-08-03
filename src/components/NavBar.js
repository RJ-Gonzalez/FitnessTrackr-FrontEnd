import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Home () {

    return (

        <div>
        <div className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
        <div  className="text-white"><h1>Fitness Trackr</h1></div>
          <h4 className="mb-0">
          <Link to="/" className="text-white">Home</Link>
            <span className="text-white"> | </span>
            <Link to="/Login" className="text-white">Login</Link>
            <span className="text-white"> | </span>
            <Link to="/Register" className="text-white">Register</Link>
            <span className="text-white"> | </span>
            <Link to="/AllRoutines" className="text-white">Routines</Link>
            <span className="text-white"> | </span>
            <Link to="/AllActivities" className="text-white">Activities</Link>
            <span className="text-white"> | </span>
            <Link to="/MyRoutines" className="text-white">My Routines</Link>
          </h4>
          </div>
      </div>
      </div>
        
    )

}

