import { createStore, combineReducers } from "redux";
import { indexReducer, answerReducer } from "./reducers";

export const store = createStore(
  combineReducers({
    index: indexReducer,
    answer: answerReducer,
  })
);
