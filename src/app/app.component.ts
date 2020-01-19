import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/state/app.state';
import {User} from './models/user.model';
import {Observable} from 'rxjs';
import {GoogleLogin} from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  user$: Observable<User>;
  userImage: string;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.user$ = this.store.select('user');
    this.user$.subscribe((user: User) => {
      this.userImage = `https://robohash.org/${user.uid}.png?set=set4`;
    });
  }

  googleLogin() {
    this.store.dispatch(new GoogleLogin());
  }

}
