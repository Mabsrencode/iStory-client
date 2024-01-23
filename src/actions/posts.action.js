import * as api from "../api";
export const getPost = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_START" });
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_FAILURE" });
    console.log(error);
  }
};

export const createPost = (currentId, post) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_START" });
    const { data } = await api.createPost(currentId, post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_FAILURE" });
    console.log(error);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETING_START", payload: id });
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    dispatch({ type: "DELETING_FAILURE", payload: id });
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
