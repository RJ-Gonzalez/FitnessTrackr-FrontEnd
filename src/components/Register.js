import React, { useState } from "react";
import { createUser } from "../api";
import { Link, useNavigate } from "react-router-dom";



export default function Register(){
    let navigate = useNavigate();
    const [newUsername, setnewUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    async function handleSubmit(event) {
      event.preventDefault();
      const result = await createUser(newUsername, password);
      localStorage.setItem("token",result.data.token);
      localStorage.setItem("username",newUsername);
      navigate("/Login");
    }
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
        <div  className="text-white"><h1 id = "title">Fitness Trackr</h1></div>
          <h4 className="mb-0">
          <Link to="/" className="text">Home</Link>
            <span className="text-white"> | </span>
            <Link to="/Login" className="text">Login</Link>
            <span className="text-white"> | </span>
            <Link to="/AllRoutines" className="text">Routines</Link>
            <span className="text-white"> | </span>
            <Link to="/AllActivities" className="text">Activities</Link>
          </h4>
          </div>
      </div>
          <section className="text-center text-lg-start">
            <div className="container py-4">
              <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card cascading-right">
                    <div className="card-body p-5 shadow-5 text-center">
                      <h2 className="fw-bold mb-5">REGISTER</h2>
                      <form onSubmit={handleSubmit} id="loginPage">
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example3"
                          ></label>
                          <input
                            id="form3Example3"
                            className="form-control"
                            placeholder="Choose Your New Username"
                            type="text"
                            
                            onChange={(event) => setnewUsername(event.target.value)}
                          ></input>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4"
                          ></label>
                          <input
                            id="form3Example4"
                            className="form-control"
                            placeholder="Choose Your New Password"
                            type="password"
                            
                            
                            onChange={(event) => setPassword(event.target.value)}
                          ></input>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4"
                          ></label>
                          <input
                            id="form3Example4"
                            className="form-control"
                            placeholder="Confirm Password"
                            type="password"
                            
                            
                            onChange={(event) =>
                              setConfirmPassword(event.target.value)
                            }
                          ></input>
                        </div>
    
                        <button
                          className="btn btn-primary btn-block mb-4"
                          type="submit"
                        >
                          Create Account
                        </button>
                        <div className="form-outline mb-4">
                          <Link to="/Posts">
                            <button className="btn btn-secondary">
                              View As Guest
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mb-5 mb-lg-0">
                  <img
                    src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    className="w-100 rounded-4 shadow-4" id = "registerImg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          </div>
      );
    }
