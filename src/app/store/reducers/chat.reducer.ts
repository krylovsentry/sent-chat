import {initialChatState} from '../state/chat.state';
import {ChatActions, NEW_WEB_SOCKET_MESSAGE} from '../actions/chat.actions';


export const chatReducer = (state = initialChatState, action: ChatActions) => {
  switch (action.type) {
    case NEW_WEB_SOCKET_MESSAGE:
      return {
        ...state,
        chatMessages: state.chatMessages.concat([action.webSocketMessage]),
      };

    default: {
      return state;
    }
  }
};
