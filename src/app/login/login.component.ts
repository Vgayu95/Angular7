import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  getName: any;
  getPass: any;
  getEmail: any;
  emailval: any;
  userloggedIn: any;
  constructor(private router: Router, private service: LoginService) { }
  ngOnInit() {
    this.getName = localStorage.getItem('name');
    this.getPass = localStorage.getItem('passwrd');
    this.getEmail = localStorage.getItem('emaildata');
    this.userloggedIn = localStorage.getItem('loggedIn');
  }
  loginGoogle() {
    console.log("logged in");
    this.service.login();
  }
  // login() {
  //   if (this.username && this.password) {
  //     if (this.username === this.getName && this.password === this.getPass && this.emailval === this.getEmail) {
  //       Swal.fire('Logged In Successfully');
  //     }
  //     else{
  //       Swal.fire('User name or Password invalid');
  //       return false;
  //     }
  //   }
  //   else{
  //     Swal.fire('Please enter User Name and Password');
  //     return false;
  //   }
  //   this.router.navigate(['/newapp/list']);
  // }
}
