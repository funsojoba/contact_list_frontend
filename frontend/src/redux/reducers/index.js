import { combineReducers } from 'redux'
import contactReducer from './contacts.reducers'
import registerReducer from './register.reducer'
import loginReducer from './login.reducer'
import userReducer from './user.reducer'
import addContactReducer from './addContact.reducer'


const rootReducer = combineReducers({
    contactReducer,
    registerReducer,
    loginReducer,
    userReducer,
    addContactReducer
})

export default rootReducer
