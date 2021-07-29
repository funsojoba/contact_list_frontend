import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const middleware = applyMiddleware(thunk)

// eslint-disable-next-line
const store = createStore(rootReducer, composeWithDevTools(middleware))
export default store

