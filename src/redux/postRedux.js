import Axios from 'axios';

/* selectors */
export const getCurrentPost = ({ post }) => post.data;

/* action name creator */
const reducerName = 'post';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchPost = postId => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const url = `http://localhost:8000/api/posts/${postId}`;
    Axios.get(url)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const addPost = (post, userEmail) => {
  const url = `http://localhost:8000/api/posts/`;
  return Axios.post(url, {
    ...post,
    author: userEmail,
  });
};
/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        request: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        request: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        request: {
          active: false,
          error: true,
        },
      };
    }
    default:
      return statePart;
  }
};
