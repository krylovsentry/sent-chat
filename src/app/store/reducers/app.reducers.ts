import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {chatReducer} from './chat.reducer';
import {userReducer} from './user.reducer';


export const appReducers: ActionReducerMap<AppState, any> = {
  chat: chatReducer,
  user: userReducer
};
