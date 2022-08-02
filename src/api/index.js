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
    console.log(result)
    return result
  }catch(error){
    throw error;
    }
  }


  export async function getAllPublicRoutines() {
    try {
      const response = await fetch(`${BASE_URL}/routines`)
        // headers: {
        //   'Content-Type': 'application/json',
        // }
      // });
      console.log(response)
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  