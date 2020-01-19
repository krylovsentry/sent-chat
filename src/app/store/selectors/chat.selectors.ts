import {AppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {ChatState} from '../state/chat.state';


const selectChat = (appState: AppState) => appState.chat;

export const selectChatMessages = createSelector(selectChat, (state: ChatState) => state.chatMessages);

export const selectSentimentChatLevel = createSelector(selectChat, (state: ChatState) => state.chatSentimentLevel);
