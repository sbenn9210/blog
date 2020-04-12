import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import createReducer from "./createReducer";
import newsPostsReducer from "./newsPostsReducer";
import fetchAvatars from './fetchAvatars'

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
  auth: authReducer,
  blog: createReducer,
  newsPosts: newsPostsReducer,
  avatars: fetchAvatars
});
