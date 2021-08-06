import { combineReducers } from 'redux'
import contactReducer from './contacts.reducers'
import registerReducer from './register.reducer'
import loginReducer from './login.reducer'
import userReducer from './user.reducer'
import addContactReducer from './addContact.reducer'
import sendMailReducer from './sendMail.reducer'


const rootReducer = combineReducers({
    contactReducer,
    registerReducer,
    loginReducer,
    userReducer,
    addContactReducer,
    sendMailReducer
})

export default rootReducer
