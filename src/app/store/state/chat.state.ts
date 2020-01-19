import {Message} from '../../models/message.model';

export interface ChatState {
  chatMessages: Message[];
  chatSentimentLevel: number;
}

export const initialChatState: ChatState = {
  chatMessages: [],
  chatSentimentLevel: 0,
};
