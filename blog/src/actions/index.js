import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

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

export const signIn = () => {
  return {
    type: "SIGN_IN"
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};
