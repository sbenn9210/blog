import { CREATE_TITLE, CREATE_BODY } from "../actions/types";

const INITIAL_STATE = {
  title: null,
  body: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TITLE: {
      console.log(action);

      return { ...state, title: action.payload };
    }
    case CREATE_BODY: {
      console.log(action);
      return { ...state, body: action.payload };
    }
    default:
      return state;
  }
};
