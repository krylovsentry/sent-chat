import {Action} from '@ngrx/store';
import {Message} from '../../models/message.model';

export const NEW_WEB_SOCKET_MESSAGE = '[WebSocket] New message';


export class NewWebSocketMessageAction implements Action {
  readonly type = NEW_WEB_SOCKET_MESSAGE;

  constructor(public webSocketMessage: Message) {
  }
}


export type ChatActions = NewWebSocketMessageAction;
