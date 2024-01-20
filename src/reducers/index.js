import { combineReducers } from "redux";
import postsReducer from "./posts.reducer";
import authReducer from "./auth";
export default combineReducers({
  posts: postsReducer,
  authReducer,
});
