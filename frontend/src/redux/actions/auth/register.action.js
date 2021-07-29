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
        const res = await request.post("/auth/register/", payload);
        console.log(res)
        return dispatch(registerSuccess(res));
    } catch (error) {
        // const err = retrieveErrMessage(error);
        console.log(error)
        return dispatch(registerFailed(error));
    }
};

export default register;