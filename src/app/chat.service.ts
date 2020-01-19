import {Message} from "./models/message.model";
import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";
import {Store} from '@ngrx/store';
import {AppState} from './store/state/app.state';
import {NewWebSocketMessageAction} from './store/actions/chat.actions';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(
    private socket: Socket,
    private store$: Store<AppState>
  ) {
    this.socket.on('new-message', (message: Message) => {
      this.store$.dispatch(new NewWebSocketMessageAction(message));
    });
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public getChatSentimentLevel = () => {
    return new Observable((observer) => {
      this.socket.on('chat-sentiment', (sentiment: boolean) => {
        observer.next(sentiment);
      });
    });
  }

}
