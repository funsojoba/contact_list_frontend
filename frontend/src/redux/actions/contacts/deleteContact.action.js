import { DELETE_CONTACT, DELETE_CONTACT_SUCCESSFUL, DELETE_CONTACT_FAILED } from "../types";
import axios from "axios";
import { headers } from "../../../request";

const token = localStorage.getItem('token')

const deleteContactSuccess = (payload)=>{
    return{
        type: DELETE_CONTACT_SUCCESSFUL,
        payload
    }
}

const deleteContactFailed = (oayload) => {
    return {
        type: DELETE_CONTACT_FAILED,
        payload
    }
}


const deleteContact = (id)=> dispatch =>{
    axios.delete('http://12')
}