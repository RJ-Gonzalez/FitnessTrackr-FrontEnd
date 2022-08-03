import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { createMyActivity } from "../api";

export default function createActivity(){
  let navigate = useNavigate();


    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    
  const authToken = localStorage.getItem("token") ? true : false;

  async function handleSubmit(event){
    event.preventDefault();
    const token = localStorage.getItem("token");
    alert("New Routine Created")
    const response = await createMyActivity(token, name, description);
    console.log(response, "this is response from CreateRoutines HandleSubmit")
    navigate("/AllActivities")
    return response;
  }
  return (
    <section className=" text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
              src="https://miro.medium.com/max/1200/0*qfd7ZVobvhb-R0Nr"
              alt="Trendy Pants and Shoes"
              className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              {authToken === true ? (
                <>
                  <h1>Create a New Activity</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        id="form2Example1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                        placeholder="title"
                      ></input>
                      <input
                        id="form2Example1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="description"
                      ></input>
                      <button className="btn btn-dark" id="newPostButton">
                        Submit New Activity
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <h2>Please Login Before Attempting To Activity</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


