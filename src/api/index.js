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

  export async function getUser(authToken){
    try{
      const userData ={
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${authToken}`
      }
      const response = await fetch(`${BASE_URL}/users/me`,{
        headers: userData
      })
      const result = await response.json()
      return result 
    } catch (error){
      throw error;
    }
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

  export async function getAllRoutinesByUser(token) {
    try{
      const response = await fetch(`${BASE_URL}/users/me`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response, "this is response!!!")
    const result = await response.json();
    console.log(result, "this is result!!")
    const data = result.data;
  return data;
    // return result;
  } catch (error) {
    console.log(error);
  }
    }
  
export async function userRoutines(token, user){
  try{
    const response = await fetch(`${BASE_URL}/users/${user}/routines`,{
      headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    })
    const result = response.json()
    return result
  }catch(error){

  }
}  

export async function createRoutine(token, name, goal){
  const response = await fetch(`${BASE_URL}/routines`,
  {
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
  })
  .catch(console.error)
}

