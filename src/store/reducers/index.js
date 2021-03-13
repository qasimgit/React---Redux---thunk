import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './userReducer'
import apiUserReducer from './apiUserReducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    users: userReducer,
    api: apiUserReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store