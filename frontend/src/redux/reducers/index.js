import { combineReducers } from 'redux'
import contactReducer from './contacts.reducers'
import registerReducer from './register.reducer'
import loginReducer from './login.reducer'


const rootReducer = combineReducers({
    contactReducer,
    registerReducer,
    loginReducer
})

export default rootReducer