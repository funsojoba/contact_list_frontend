import { combineReducers } from 'redux'
import contacts from './contacts.reducers'


const rootReducer = combineReducers({
    contacts
})

export default rootReducer