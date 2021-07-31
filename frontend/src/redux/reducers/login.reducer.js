import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from '../actions/types'

initialState = {
    data: "",
    loading: false,
    error: ""
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true,
                error: null,
                data: action.payload.data
            }

        case LOGIN_FAILED:
            return{
                ...state,
                loading:false,
                
            }

        default:
            return state
    }
}

export default loginReducer