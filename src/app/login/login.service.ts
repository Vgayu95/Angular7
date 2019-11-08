import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth ) { }
  login() {
    console.log('Redirect to Google Login');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
}
