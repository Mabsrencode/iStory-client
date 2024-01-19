const postsReducer = (
  state = {
    posts: [],
    isLoading: false,
    isSubmitting: false,
    isDeleting: [],
  },
  action
) => {
  switch (action.type) {
    case "DELETING_START":
      return {
        ...state,
        isDeleting: [...state.isDeleting, action.payload],
      };
    case "DELETE":
    case "DELETING_FAILURE":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        isDeleting: state.isDeleting.filter(
          (postId) => postId !== action.payload
        ),
      };
    case "UPDATE":
    case "LIKE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "FETCH_ALL":
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case "CREATE_START":
      return {
        ...state,
        isSubmitting: true,
      };
    case "CREATE":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isSubmitting: false,
      };
    case "CREATE_FAILURE":
      return {
        ...state,
        isSubmitting: false,
      };
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
