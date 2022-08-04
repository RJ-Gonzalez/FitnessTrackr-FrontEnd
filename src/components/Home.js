import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Home () {

    return (
        <div>
        <div className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* <nav className="d-flex"> */}
        <div className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
        <div  className="text-white"><h1 id = "title">Fitness Trackr</h1></div>
          <h4 className="mb-0">
          <Link to="/" className="text">Home</Link>
            <span className="text-white"> | </span>
            <Link to="/Login" className="text">Login</Link>
            <span className="text-white"> | </span>
            <Link to="/Register" className="text">Register</Link>
            <span className="text-white"> | </span>
            <Link to="/AllRoutines" className="text">Routines</Link>
            <span className="text-white"> | </span>
            <Link to="/AllActivities" className="text">Activities</Link>
            <span className="text-white"> | </span>
            <Link to="/MyRoutines" className="text">My Routines</Link>
          </h4>
          </div>
      </div>

      </div>
        <img className="img" src = "https://www.31fss.com/templates/yootheme/cache/Fitness-Centers-HERO-ed9cae28.jpeg"/>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "black" }}>
          Alina Sapronova + Ruby Gonzalez © 2022
        </div>
      </footer>
      </div>
        
    )

}

// // export default Home;