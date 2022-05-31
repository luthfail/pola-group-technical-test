import todoReducers from "./todoReducers"
import { combineReducers } from "redux"

export const reducers = combineReducers({
    todo: todoReducers
})