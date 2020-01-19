import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {ChatComponent} from './components/chat/chat.component';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducers/app.reducers';
import {EmojiPipe} from './pipes/emoji.pipe';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/effects/user.effects';

const localDebugUrl = 'http://localhost:8080';

const config: SocketIoConfig = {
  url: window.location.hostname, options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    EmojiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    EffectsModule.forRoot([
      UserEffects
    ]),
    FormsModule,
    SocketIoModule.forRoot(config),
    StoreModule.forRoot(appReducers),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
