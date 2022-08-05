//// BROUGHT IN A COPY OF CREATE ACTIVITY FOR EXAMPLE TO CREATEROUTINEACTIVITY. CREATED API FOR ADD ROUTIEN ACTIVITY.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoutineActivity, getAllPublicRoutines } from "../api";

export default function AttachRoutineActivity({ routineId }) {
  const navigate = useNavigate()
  // console.log(routineId, "this is the id of the posted routine");
  // console.log(count, "this is count", duration, "this is duration")
  //   let navigate = useNavigate();
  //   const [countList,setCountList] = useState([]);
  //   const [durationList,setDurationList] = useState([]);
  //   const[count, setCount]=useState("")
  //   const[duration, setDuration]=useState("")
  //   const[activityId, setActivityId]=useState("")

  // useEffect(()=>{
  //   Promise.all([getAllPublicRoutines()]).then(
  //     ([count,duration]) => {
  //       setCountList(count)
  //       setDurationList(duration)
  //     }
  //   )
  //   .catch(error =>
  //     console.log("error"))
  // },[]);

  // console.log(count, "this is count!!!")
  // console.log(duration, "this is duration!!!")

  // return (<form id="search" onSubmit={async (event) => {
  //   event.preventDefault()
  //   try {
  //     const result = await createRoutineActivity({count,duration,activityId});
  //     console.log(result);
  //       return result
  // } catch (error) {
  //     console.error(error);
  // }
  // }}>

  // <fieldset>
  //       <label htmlFor="select-classification">Count</label>
  //       <select
  //         name="classification"
  //         id="select-classification"
  //         value={count}
  //         onChange={(event) => setCount(event.target.value)}>
  //         <option value="any">Any</option>
  //         {/* {routines.activity.map(count => <option>{count.count}</option> )} */}
  //       </select>
  //     </fieldset>
  //     <fieldset>
  //       <label htmlFor="select-century">Duration<span className="century-count"></span></label>
  //       <select
  //         name="century"
  //         id="select-century"
  //         value={duration}
  //         onChange={(event) => setDuration(event.target.value)}>
  //         <option value="any">Any</option>
  //         {/* {routines.activity.map(count => <option>{count.duration}</option>)} */}
  //       </select>
  //      </fieldset>
  //     <button>SEARCH</button>
  //   </form>
  // )
  // }



  const [count, setCount] = useState([]);
  const [duration, setDuration] = useState([]);
  const [activityId, setActivityId] = useState([]);
  const [routines, setRoutines] = useState([]);

  

  const authToken = localStorage.getItem("token") ? true : false;

  async function handleSubmit(event){
    event.preventDefault();
    // const token = localStorage.getItem("token");
    alert("New Routine-Activity Created")
    const response = await createRoutineActivity(routineId, activityId, count, duration);
    console.log(routineId,"this is routinesID", activityId, "this is activityid", count, "count", duration, "duration")
    navigate("/MyRoutines")
    return response;
  }
  return (
    <section className=" text-center text-lg-start">
      <div className="card mb">
        <div className="row g-0 d-flex align-items-center">
          <div className="">
          </div>
          <div className="col-lg-8">
            <div>
              {authToken === true ? (
                <>
                  <h3>Set Your Count & Duration</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        id="form2Example1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setCount(event.target.value)}
                        placeholder="Count"
                      ></input>
                      <input
                        id="form2Example1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setDuration(event.target.value)}
                        placeholder="Duration"
                      ></input>
                      <button className="btn btn-dark" id="newPostButton">
                        Submit 
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