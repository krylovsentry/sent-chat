import {initialUserState} from '../state/user.state';
import {AUTH_ERROR, AUTHENTICATED, GOOGLE_LOGIN, LOGOUT, UserActions} from '../actions/user.actions';


export const userReducer = (state = initialUserState, action: UserActions) => {
  switch (action.type) {

    case AUTHENTICATED:
      return {
        ...state,
        displayName: action.user.displayName,
        uid: action.user.uid,
        loading: false
      };

    case GOOGLE_LOGIN:
      return {...state, loading: true};

    case AUTH_ERROR:
      return {...state, ...action.payload, loading: false};

    case LOGOUT:
      return {...state, loading: true};

    default:
      return state;
  }
};


