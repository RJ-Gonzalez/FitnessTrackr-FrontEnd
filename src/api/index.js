import { AllActivities } from "../components";

export const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;

export async function createUser (username, password){
    try {
    console.log(`${BASE_URL}/users/register`)
    const response = await fetch(`${BASE_URL}/users/register`,{
    method:"POST",
    headers: {
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
            username: username,
            password: password,
    })
  })
  
  const result = await response.json()
  console.log(result)
  return result
  }catch(error){
  throw error;
  }
  }


  export async function loginUser (username, password) {
    try{
    const response = await fetch(`${BASE_URL}/users/login`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          username: username,
          password: password
        })
    }
    )
    const result = await response.json()
    const token = result.token
    console.log(token)
    return token
  }catch(error){
    throw error;
    }
  }

  export async function connectProfile(token) {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  }

  export async function getAllPublicRoutines() {
    try {
      const response = await fetch(`${BASE_URL}/routines`,{
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(response, "this is response!!!")
      const result = await response.json();
      console.log(result, "this is result!!")
      // displayRoutines(result)
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  export async function getAllActivities() {
    try {
      const response = await fetch(`${BASE_URL}/activities`,{
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(response, "this is response!!!")
      const result = await response.json();
      console.log(result, "this is result!!")
      // displayRoutines(result)
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  


  export async function getActivityById() {
    try {
      const response = await fetch(`${BASE_URL}/activities/id/routines`,{
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(response, "this is response!!!")
      const result = await response.json();
      console.log(result, "this is result!!")
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  export async function userRoutines(token,username){
    try{
      console.log(token)
      const response = await fetch(`${BASE_URL}/users/${username}/routines`,{
        headers:{
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${token}`
        }
    }
      )
      const result = response.json()
      console.log(result)
      return result
    }catch(error){
      console.log(error);
    }
  } 

export async function createRoutine(token, name, goal){
  const response = await fetch(`${BASE_URL}/routines`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
     name: name,
     goal: goal,
     isPublic: true
    })
  }) .then((response => response.json()))
  .then(result => {
    console.log(result) 
}
).catch(console.error)
}


export async function deleteRoutine(token, routineId){
  try{
      const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }
      })
      const result = await response.json();
      return result;
  }catch (error){
      console.error("Isssue deleting Posts", error)
  }
}

export async function createMyActivity( token, name, description){
  const response = await fetch(`${BASE_URL}/activities`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
     name: name,
     description: description
    })
  }) .then((response => response.json()))
  // console.log(response,"This is create ACTIVITY")
  .then(result => {
    console.log(result) 
}
).catch(console.error)
}

export async function createRoutineActivity(routineId, activityId, count, duration){
  try{
    console.log(routineId, activityId, count, duration, "THIS IS CREATEROUTINEACTIVITY FROM API")
    const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`,{
      method: "POST",
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration
        })
       
  })
  const result = await response.json()
  return result;
  }catch(error){
    console.log(error)
  }
}


export async function userActivity(token,activityId){
  try{
    console.log(token)
    const response = await fetch(`${BASE_URL}/activities/${activityId}/routine`,{
      headers:{
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      }
  }
    )
    const result = response.json()
    console.log(result)
    return result
  }catch(error){
    console.log(error);
  }
} 

export async function UpdateRoutines(name, goal, isPublic,routineId,token){
  try{
    const response = await fetch(`${BASE_URL}/routines/${routineId}`,{
      method: "PATCH",
      headers:{
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic:isPublic
        })
      }
    )
    const result = response.json()
    return result
  }catch(error){
    console.log(error);
  }
} 

export async function UpdateActivities(duration,count,routineId,token){
  try{
    
    const response = await fetch(`${BASE_URL}/routine_activities/${routineId}`,{
      
      method: "PATCH",
      headers:{
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
      count:count,
      duration:duration
        })
      }
    )
    console.log(response, "Response from api routineActivities")
    const result = response.json()
    console.log(result,"this is Routine Activities from api")
    return result
  }catch(error){
    console.log(error);
  }
} 
