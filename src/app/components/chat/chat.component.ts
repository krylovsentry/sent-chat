import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../chat.service';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {Observable} from 'rxjs';
import {Message} from '../../models/message.model';
import {selectChatMessages} from '../../store/selectors/chat.selectors';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  messages$: Observable<Message[]>;
  newMessage: string;

  constructor(
    private chatService: ChatService,
    private store$: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.messages$ = this.store$.pipe(select(selectChatMessages));
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}


