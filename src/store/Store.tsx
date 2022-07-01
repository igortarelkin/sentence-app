import { legacy_createStore as createStore } from "redux";
import { AnswerReducer } from "./AnswerReducer";



export const store = createStore(AnswerReducer);