import { Action } from "./types";

const initialAnswerState = {
  who: "",
  what: "",
  where: "",
  when: "",
};

export const answerReducer = (state = initialAnswerState, action: Action) => {
  if (action.type === "CHANGE_ANSWER") {
    switch (action.index) {
      case 0: {
        return { ...state, who: action.payload };
      }
      case 1: {
        return { ...state, what: action.payload };
      }
      case 2: {
        return { ...state, where: action.payload };
      }
      case 3: {
        return { ...state, when: action.payload };
      }
      default:
        return state;
    }
  } else {
    return state;
  }
};

export const indexReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      if (state < 3) {
        return state + 1;
      } else {
        return state;
      }
    }
    case "DECREMENT": {
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};
