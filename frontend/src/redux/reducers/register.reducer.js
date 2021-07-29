import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILED } from "../actions/types";

const initialState = {
    data:"",
    error:"",
    loading:false
}

const registerReducer = (state=initialState, action) =>{
    const {payload, type} = action

    switch (type) {
        case REGISTER:
            return {
                ...state,
                loading:true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                data:payload,
                error:null,
                loading:false
            }
            
        case REGISTER_FAILED:
            return {
                ...state,
                data:null,
                error:payload,
                loading:false
            }
    
        default:
            return state
    }
}

export default registerReducer