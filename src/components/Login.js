import { useState } from "react"
import Home from "./Home"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../redux/actionCreator"

const Login = () =>{
//   const[user,setUser] = useState({
//         firstName:'',
//         lastName :'',
//         password:''

//     })
const user = useSelector(state=>state)
const dispatch =useDispatch()
    // const Handler = (e)=>{
    //     setUser({
    //         ...user,
    //         [e.target.name] : e.target.value
    //     })
    // }
    return(
        <div>
            <input type="text"
            name="firstName"
            placeholder="enter your firstName"
            // value={user.firstName}
            onChange={(e)=>dispatch(updateUser({...user,firstName:e.target.value}))}
            /><br/>
             <input type="text"
            name="lastName"
            placeholder="enter your LastNmae"
            // value={user.lastName}
            onChange={(e)=>dispatch(updateUser({...user,lastName:e.target.value}))}
            /><br/>
             <input type="password"
            name="password"
            placeholder="enter your password"
            // value={user.password}
            onChange={(e)=>dispatch(updateUser({...user,password:e.target.value}))}
            /><br/>
            {/* <button onSubmit={(e) => dispatch(updateUser({...user,[e.target.name]: e.target.value}))}>Login</button> */}
            <hr/>
          <p>{`${user.firstName} ${user.lastName} ${user.password}`}</p>
            <hr/>
            <Home/>
        </div>
    )
}
export default Login