import {ChatService} from "./chat.service";
import {Message} from "./message.model";
import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  newMessage: string;
  messageList: string[] = [];

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  ngOnInit() {
    this.chatService.getMessages().subscribe(m => console.dir(m));
  }
}
