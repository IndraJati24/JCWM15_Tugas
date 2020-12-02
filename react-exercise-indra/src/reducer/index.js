import {combineReducers} from 'redux'
import userReducer from './userReducer'
import countReducer from './countReducer'

const allReducers = combineReducers({
    user : userReducer,
    count : countReducer
})

export default allReducers