import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
    
    user: Observable<firebase.User>

    constructor(private af:AngularFireAuth){
        this.af = af;
        this.user = af.authState;
    }

    login(email, password){
        this.af.auth.signInWithEmailAndPassword(email, password);
    }

    logout(){
        this.af.auth.signOut();
    }

    getUser(){
        return this.user;
    }
}
