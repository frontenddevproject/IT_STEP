import {combineReducers} from "redux";
import { counterReducer } from "./counter";
import { todosReducer } from "./todos";

// combineReducers - merging of all reducers

export const allReducers = combineReducers({
   counter: counterReducer,
   todos: todosReducer
});