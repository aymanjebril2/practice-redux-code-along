/// create redux action

export const GET_POSTS = "GET_POSTS";

////  post from Api fatch
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
/// we passsing the post on succse from api
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
/// we passsing the post on falure from api

// create action creators, which are functions that return an action
// which consists of the type and an optional payload loading data
export const getPosts = () => ({
  type: GET_POSTS,
});
export const getPostsSuccess = (Post) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});
export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});
