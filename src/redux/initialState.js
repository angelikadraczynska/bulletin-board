export const initialState = {
  user: {
    isAuth: false,
    email: '',
  },
  posts: {
    data: {
      posts: [],
    },
    loading: {
      active: false,
      error: false,
    },
  },
  post: {
    data: {},
    request: {
      active: false,
      error: false,
    },
  },
};
