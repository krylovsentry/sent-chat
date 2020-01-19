import {Message} from "./message.model";
import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) {
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return new Observable((observer) => {
      this.socket.on('new-message', (message: Message) => {
        observer.next(message);
      });
    });
  }

  public getChatSentimentLevel = () => {
    return new Observable((observer) => {
      this.socket.on('chat-sentiment', (sentiment: boolean) => {
        observer.next(sentiment);
      });
    });
  }

}
