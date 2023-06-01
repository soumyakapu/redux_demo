import { UPDATE } from "./actionType"

const intialState = {
    firstName :'',
    lastName :'',
    password:''
}
export const reducer =(state=intialState, action)=>{
    if(action.type === UPDATE){
        return{
         firstName:  action.paylod.firstName,
         lastName : action.paylod.lastName,
         password : action.paylod.password
        }
    }
    else{
        return{
            state
        }
    }
}