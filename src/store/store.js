import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/counterReducer";

const combine = combineReducers({
  counter: countReducer,
});

const store = createStore(combine);

export default store