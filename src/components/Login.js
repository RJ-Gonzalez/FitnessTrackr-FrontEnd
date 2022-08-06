import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function LoggedIn() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "form2Example1") {
      setUsername(event.target.value);
    } else if (changed === "form2Example2") {
      setPassword(event.target.value);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = await loginUser(username, password);
    localStorage.setItem("token",token);
    localStorage.setItem("username",username);
    navigate("/MyRoutines");
  };
  return (
    <div>
              <div className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
        <div  className="text-white"><h1 id = "title">Fitness Trackr</h1></div>
          <h4 className="mb-0">
          <Link to="/" className="text">Home</Link>
            <span className="text-white"> | </span>
            <Link to="/Register" className="text">Register</Link>
            <span className="text-white"> | </span>
            <Link to="/AllRoutines" className="text">Routines</Link>
            <span className="text-white"> | </span>
            <Link to="/AllActivities" className="text">Activities</Link>
          </h4>
          </div>
      </div>
    <section className=" text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
             id = "loginImg"
              src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="Trendy Pants and Shoes"
              className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              <form id="loginPage" onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <h2>Welcome! Please Log In</h2>

                  <input
                    id="form2Example1"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={handleOnChange}
                    
                  ></input>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    placeholder="Password"
                    
                    onChange={handleOnChange}
                  ></input>
                </div>
                <button id="loginButton" className="btn btn-dark" type="submit">
                  Login
                </button>

                <Link to="/AllRoutines">
                  <button id="viewAsGuest" className="btn btn-dark">
                    View As Guest
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
