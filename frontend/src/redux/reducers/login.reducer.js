import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from '../actions/types'

const initialState = {
    data: "",
    loading: false,
    error: "",
    message: ""
}

const loginReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: true,
                error: null,
                data: payload.data,
                message: payload.data
            }

        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                message: payload.message,
                error: payload.error
            }

        default:
            return state
    }
}

export default loginReducer