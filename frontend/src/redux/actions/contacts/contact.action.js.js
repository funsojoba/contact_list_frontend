import { FETCH_CONTACT, FETCH_CONTACT_SUCCESSFUL } from "../types";
import axios from 'axios'


const fetchContactSuccess = (payload)=>{
    return {
        type: FETCH_CONTACT_SUCCESSFUL,
        payload
    }
}

export const getContact = ()=> dispatch =>{
    axios.get('http://127.0.0.1:8000/api/v1/')
    .then(res=>{
        dispatch({
            type:FETCH_CONTACT,
            payload:res.data
        })
    }).catch(err => console.log(err))
}