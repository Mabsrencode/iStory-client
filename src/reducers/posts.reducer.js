const postsReducer = (state = { posts: [], isLoading: false }, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
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
    case "CREATE":
      return {
        ...state,
        posts: [...state.posts, action.payload],
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
