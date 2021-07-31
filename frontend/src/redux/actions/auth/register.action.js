import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILED } from "../types";
import axios from "axios";

const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload,
});

const registerFailed = (payload) => ({
    type: REGISTER_FAILED,
    payload,
});

const register = (payload) => async (dispatch) => {
    try{
        console.log('From payload',payload)
        const res = axios.post("http://127.0.0.1:8000/auth/register/", payload)
        console.log(res.data)
        return dispatch(registerSuccess(res))
    }
    catch (error){
        console.log(error)
        return dispatch(registerFailed(error))
    }

        
};

export default register;