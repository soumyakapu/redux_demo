import { UPDATE } from "./actionType"

export const updateUser = (paylod) =>{
    return{
        type: UPDATE,
        paylod: paylod
    }
}