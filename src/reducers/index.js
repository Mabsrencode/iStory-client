import { combineReducers } from "redux";
import posts from "./posts.reducer";
import auth from "./auth";
export default combineReducers({
  // posts: postsReducer,
  // authReducer,
  posts,
  auth,
});
