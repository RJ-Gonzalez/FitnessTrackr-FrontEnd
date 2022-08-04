//// BROUGHT IN A COPY OF CREATE ACTIVITY FOR EXAMPLE TO CREATEROUTINEACTIVITY. CREATED API FOR ADD ROUTIEN ACTIVITY.


import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { createRoutineActivity, getAllPublicRoutines } from "../api";


export default function AttachRoutineActivity({routineId}){
  let navigate = useNavigate();
  const [countList,setCountList] = useState([]);
  const [durationList,setDurationList] = useState([]);
  const[count, setCount]=useState("")
  const[duration, setDuration]=useState("")
  const[activityId, setActivityId]=useState("")
  
    
useEffect(()=>{
  Promise.all([getAllPublicRoutines()]).then(
    ([count,duration]) => {
      setCountList(count)
      setDurationList(duration)
    }
  )
  .catch(error =>
    console.log("error"))
},[]);

return (<form id="search" onSubmit={async (event) => {
  // write code here
  event.preventDefault()
  // setIsLoading (true)
  try {
    const result = await createRoutineActivity({count,duration,activityId});
    console.log(result);
      return result
} catch (error) {
    console.error(error);
}
}}>

<fieldset>
      <label htmlFor="select-classification">Count</label>
      <select 
        name="classification"
        id="select-classification"
        value={count} 
        onChange={(event) => setCount(event.target.value)}>
        <option value="any">Any</option>
        {/* {countList.map(count => <option key={count.id} value={count.name} >{count.count}</option> )} */}
      </select>
    </fieldset>
    <fieldset>
      <label htmlFor="select-century">Duration<span className="century-count"></span></label>
      <select 
        name="century" 
        id="select-century"
        value={duration} 
        onChange={(event) => setDuration(event.target.value)}>
        <option value="any">Any</option>
        {/* {durationList.map(duration => <option key={duration.id} value={duration.name}>{duration.duration}</option>)} */}
      </select>
     </fieldset>
    <button>SEARCH</button>
  </form>
)
}

  //  const authToken = localStorage.getItem("token") ? true : false;
  // async function handleSubmit(event){

    
  //   event.preventDefault();
  //   alert("New Routine-Activity Created")
  //   const response = await createRoutineActivity(routineId, activityId, count, duration);
  //   console.log(response, "this is response from Create Routine Activity")
  //   navigate("/MyRoutines")
  //   return response;
  // }
  // return (
  //   <section className=" text-center text-lg-start">
  //     <div className="card mb-3">
  //       <div className="row g-0 d-flex align-items-center">
  //         <div className="col-lg-4 d-none d-lg-flex">
  //           <img
  //             src="https://miro.medium.com/max/1200/0*qfd7ZVobvhb-R0Nr"
  //             alt="Trendy Pants and Shoes"
  //             className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
  //           />
  //         </div>
  //         <div className="col-lg-8">
  //           <div className="card-body py-5 px-md-5">
  //             {authToken === true ? (
  //               <>
  //                 <h1>Create a New Routine-Activity</h1>
  //                 <form onSubmit={handleSubmit}>
  //                   <div className="form-outline mb-4">
  //                     <input
  //                       id="form2Example1"
  //                       className="form-control"
  //                       type="text"
  //                       onChange={(event) => setCount(event.target.value)}
  //                       placeholder="Count"
  //                     ></input>
  //                     <input
  //                       id="form2Example1"
  //                       className="form-control"
  //                       type="text"
  //                       onChange={(event) => setDuration(event.target.value)}
  //                       placeholder="Duration"
  //                     ></input>
  //                     <button className="btn btn-dark" id="newPostButton">
  //                       Submit New Routine-Activity
  //                     </button>
  //                   </div>
  //                 </form>
  //               </>
  //             ) : (
  //               <h2>Please Login Before Attempting To Activity</h2>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );



