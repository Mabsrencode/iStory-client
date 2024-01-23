import * as api from "../api/index.js";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", data });
    navigate("/");
    window.location.reload();
  } catch (error) {
    console.error("Sign-in error:", error);
    if (error.response && error.response.data) {
      console.error("Server error response:", error.response.data);
    }
  }
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });
    navigate("/");
    window.location.reload();
  } catch (error) {
    console.error("Sign-up error:", error);
    if (error.response && error.response.data) {
      console.error("Server error response:", error.response.data);
    }
  }
};
