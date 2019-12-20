import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_TITLE,
  CREATE_BODY,
  NEW_POST
} from "./types";

// export const fetchPosts = async () => {
//   //Bad approach!!
//   const response = await jsonPlaceholder.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response
//   };
// };

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //Manually dispatching our action creator to update the store
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createTitle = title => {
  return {
    type: CREATE_TITLE,
    payload: title
  };
};

export const createBody = body => {
  return {
    type: CREATE_BODY,
    payload: body
  };
};

export const addPost = post => {
  return {
    type: NEW_POST,
    payload: post
  };
};
