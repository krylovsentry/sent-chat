import {Actions, Effect, ofType} from '@ngrx/effects';
import {AngularFireAuth} from '@angular/fire/auth';
import {Injectable} from '@angular/core';
import {Authenticated, GET_USER, GetUser, GOOGLE_LOGIN, NotAuthenticated} from '../actions/user.actions';
import {from, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable()
export class UserEffects {

  constructor(private actions: Actions, private afAuth: AngularFireAuth) {
  }

  @Effect()
  getUser: Observable<Action> = this.actions
    .pipe(
      ofType(GET_USER),
      switchMap(() => this.afAuth.authState),
      map(authData => {
        if (authData) {
          return new Authenticated({
            uid: authData.uid,
            displayName: authData.displayName
          });
        } else {
          return new NotAuthenticated();
        }

      })
    );

  @Effect()
  login: Observable<Action> = this.actions.pipe(
    ofType(GOOGLE_LOGIN),
    switchMap(payload => {
      return from(this.googleLogin());
    }),
    map(credential => new GetUser())
  );

  private googleLogin(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
