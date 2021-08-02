import axios from "axios";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../types";
import { toast } from "react-toastify";

const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

const loginFailure = (payload) => ({
    type: LOGIN_FAILED,
    payload
})

const login = (payload) =>{
    return function (dispatch){
        axios.post('http://127.0.0.1:8000/auth/login', payload)
        .then(res =>{
            console.log(res.data)
            toast.success('Welcome back')
            dispatch(loginSuccess(res.data))
        }).catch(err => {
            console.log(err)
            toast.error("Something went wrong")
            dispatch(loginFailure(err))
        })
    }
}

export default login