import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer
});
