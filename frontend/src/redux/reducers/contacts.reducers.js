import { FETCH_CONTACT, FETCH_CONTACT_FAILED, FETCH_CONTACT_SUCCESSFUL } from "../actions/types";

const initialState = {
    contacts:[]
}

export default function(state=initialState, action){
    switch (action.type) {
        case FETCH_CONTACT:
            return{
                ...state,
                contacts:action.payload
            }

        default:
            return state
    }
}