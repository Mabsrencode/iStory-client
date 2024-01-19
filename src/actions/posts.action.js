import * as api from "../api";

//actions
export const getPost = () => async (dispatch) => {
  try {
    // Dispatch FETCH_START action
    dispatch({ type: "FETCH_START" });

    const { data } = await api.fetchPosts();

    // Dispatch FETCH_ALL action with the fetched data
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    // Dispatch FETCH_FAILURE action on error
    dispatch({ type: "FETCH_FAILURE" });
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
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
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
