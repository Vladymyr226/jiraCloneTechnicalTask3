import { createStore } from "redux";
import { red, green, orange, indigo, cyan, amber } from "@mui/material/colors";
import { usersToDo, usersData, stateInStore } from "../../types/types";

//Store
const initialStateToDo: stateInStore = {
  toDo: [],
  inProgress: [],
  done: [],
  user: [],
  arrayWithColors: [red, green, orange, indigo, cyan, amber],
};

const reduser = function (
  state = initialStateToDo,
  action: { type: string; payload: Array<usersToDo | usersData> }
): any {
  switch (action.type) {
    case "ACTION_SET_TODO": {
      return { ...state, toDo: action.payload };
    }
    case "ACTION_SET_IN_PROGRESS": {
      console.log("payload\t", action.payload);
      return { ...state, inProgress: action.payload };
    }
    case "ACTION_SET_DONE": {
      console.log("payload\t", action.payload);
      return { ...state, done: action.payload };
    }
    case "ACTION_SET_USER": {
      console.log("payload\t", action.payload);
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};

const store = createStore(reduser);

//for track state
store.subscribe(function () {
  // console.log("store.getState():\t", store.getState());
});

export default store;
