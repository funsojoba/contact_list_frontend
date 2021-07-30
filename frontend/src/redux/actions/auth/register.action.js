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
    try {
        const res = await axios.post("http://127.0.0.1:8000/auth/register/", payload);
        console.log(res)
        return dispatch(registerSuccess(res));
    } catch (error) {
        // const err = retrieveErrMessage(error);
        console.log(error)
        return dispatch(registerFailed(error));
    }
};

export default register;