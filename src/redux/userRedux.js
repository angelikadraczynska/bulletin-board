/* selectors */
export const isAuth = ({ user }) => user.isAuth;
export const userEmail = ({ user }) => user.email;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const LOGIN = createActionName('LOGIN');
const LOGOUT = createActionName('LOGOUT');

export const loginUser = payload => ({ payload, type: LOGIN });
export const logoutUser = payload => ({ payload, type: LOGOUT });

export const reducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...statePart,
        isAuth: true,
        email: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...statePart,
        isAuth: false,
        
      };
    }
    default:
      return statePart;
  }
};
