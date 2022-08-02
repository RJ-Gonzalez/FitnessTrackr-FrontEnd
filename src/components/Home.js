import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Home () {

    return (
//         // <div>
//         //     <div><h1>Welcome to Fitness Trackr</h1></div>
//         //     <div>Navbar</div>
//         //     <div>
//         //         <p>Login part</p>
//         //        <img>picture</img> 
//         //     </div>
//         //     <div>Footer</div>
//         // </div>
        // <div className="p-5 bg-dark mb-4">
        <div>
        <div className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* <nav className="d-flex"> */}
        <div className="container-fluid">
   {/* <div  className="text-white"><h1>Welcome to Fitness Trackr</h1></div> */}
          <h4 className="mb-0">
            <Link to="/Login" className="text-white">Login</Link>
            <span className="text-white"> | </span>
            <Link to="/Register" className="text-white">Register</Link>
            <span className="text-white"> | </span>
            <Link to="/Register" className="text-white">Routines</Link>
            <span className="text-white"> | </span>
            <Link to="/Register" className="text-white">Activities</Link>
          </h4>
          </div>
      </div>


        <img src = "https://www.31fss.com/templates/yootheme/cache/Fitness-Centers-HERO-ed9cae28.jpeg"/>





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