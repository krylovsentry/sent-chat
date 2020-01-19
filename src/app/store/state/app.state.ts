import {ChatState, initialChatState} from './chat.state';
import {initialUserState, UserState} from './user.state';


export interface AppState {
  chat: ChatState,
  user: UserState
}

const initialAppState: AppState = {
  chat: initialChatState,
  user: initialUserState
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
