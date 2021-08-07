import { combineReducers } from 'redux'
import contactReducer from './contacts.reducers'
import registerReducer from './register.reducer'
import loginReducer from './login.reducer'
import userReducer from './user.reducer'
import addContactReducer from './addContact.reducer'
import sendMailReducer from './sendMail.reducer'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
    key:'root',
    storage
}

const rootReducer = combineReducers({
    contactReducer,
    registerReducer,
    loginReducer,
    userReducer,
    addContactReducer,
    sendMailReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer
