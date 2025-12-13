import { useState } from "react"

const UserInfoUpdate = ()=>{
    const [user, setUser] = useState({name:"Saacid", Age:20,Bio:"JS_developer"})
    const updateAge=()=>{
        if(user.Age <50){
            setUser({...user, Age:user.Age+1})
        }
    }
    const DicreaseTheAge =()=>{
        if(user.Age>0){
            setUser({...user, Age:user.Age-1})

        }

    }
    return(
    <>
    <p>Name: {user.name} Age :{user.Age} Bio :{user.Bio} </p>
    <button onClick={updateAge}>IncreaseTheAge</button>
    <button onClick={DicreaseTheAge}>DicreaseTheAge</button>
    </>)
}
export default UserInfoUpdate;