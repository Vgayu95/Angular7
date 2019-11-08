import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  // displayName: any;
  constructor( private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.afAuth.authState.subscribe( user => {
      console.log(user);
      // localStorage.setItem('name',user.displayName);
      localStorage.setItem('isLoggedIn','true');
    });
  }
}
