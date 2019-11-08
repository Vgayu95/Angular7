import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: any;
  userName: string;
  headName: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('isLoggedIn');
    this.userName = localStorage.getItem('name');
  }
  
  signout(){
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('name');
    this.headName = true;
    this.router.navigate(['/home']);
  }
}
