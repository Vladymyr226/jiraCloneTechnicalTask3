export const createActionSetToDo = function (toDo: any): {
  type: string;
  payload: any;
} {
  return {
    type: "ACTION_SET_TODO",
    payload: toDo,
  };
};

export const createActionSetInProgress = function (inProgress: any): {
  type: string;
  payload: any;
} {
  return {
    type: "ACTION_SET_IN_PROGRESS",
    payload: inProgress,
  };
};

export const createActionSetDone = function (done: any): {
  type: string;
  payload: any;
} {
  return {
    type: "ACTION_SET_DONE",
    payload: done,
  };
};

export const createActionSetUser = function (user: any): {
  type: string;
  payload: any;
} {
  return {
    type: "ACTION_SET_USER",
    payload: user,
  };
};
