export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_NEWS_POSTS":
      return action.payload;
    default:
      return state;
  }
};
