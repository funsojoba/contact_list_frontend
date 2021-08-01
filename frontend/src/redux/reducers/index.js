import { combineReducers } from 'redux'
import contactReducer from './contacts.reducers'
import registerReducer from './register.reducer'


const rootReducer = combineReducers({
    contactReducer,
    registerReducer
})

export default rootReducer