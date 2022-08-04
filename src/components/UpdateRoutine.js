import React from "react";
import { useNavigate} from "react-router-dom";
import { UpdateRoutines} from "../api"



const UpdateRoutine = () => {
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("")


    useEffect(() => {
         async function getMyInfo() {
           const response = await UpdateRoutines(routineId, name, goal);
           console.log(response, "this is respone from My ROUTINES!!!!")
           setMyInfo(response);
           
         }
         getMyInfo();
       }, []);
}