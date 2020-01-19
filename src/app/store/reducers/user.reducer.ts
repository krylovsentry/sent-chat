import {ChatActions} from '../actions/chat.actions';
import {initialUserState} from '../state/user.state';


export const userReducer = (state = initialUserState, action: ChatActions) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
