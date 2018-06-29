import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers ({
    todo: todoReducer,
    app: appReducer
})

export default rootReducer