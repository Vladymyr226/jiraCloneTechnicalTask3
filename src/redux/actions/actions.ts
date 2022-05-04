import { usersData, usersToDo } from "../../types/types";

export const createActionSetToDo = function (
  toDo: Array<usersToDo | usersData>
): {
  type: string;
  payload: Array<usersToDo | usersData>;
} {
  return {
    type: "ACTION_SET_TODO",
    payload: toDo,
  };
};

export const createActionSetInProgress = function (
  inProgress: Array<usersToDo>
): {
  type: string;
  payload: Array<usersToDo>;
} {
  return {
    type: "ACTION_SET_IN_PROGRESS",
    payload: inProgress,
  };
};

export const createActionSetDone = function (done: Array<usersToDo>): {
  type: string;
  payload: Array<usersToDo>;
} {
  return {
    type: "ACTION_SET_DONE",
    payload: done,
  };
};

export const createActionSetUser = function (
  user: Array<usersData | usersToDo>
): {
  type: string;
  payload: Array<usersData | usersToDo>;
} {
  return {
    type: "ACTION_SET_USER",
    payload: user,
  };
};
