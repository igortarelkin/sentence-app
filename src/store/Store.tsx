import { legacy_createStore as createStore } from "redux";
import { AnswerReducer } from "./AnswerReducer";



export const store = createStore(AnswerReducer);

// store.subscribe(() => {
//     console.log('current state', store.getState());
//   });

  // store.dispatch({
  //   type: 'ANSWER'
  // });
  
  // store.dispatch({
  //   type: 'STATUS'
  // });