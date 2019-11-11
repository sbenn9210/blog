import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
  auth: authReducer
});
