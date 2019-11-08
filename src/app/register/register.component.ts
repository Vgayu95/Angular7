import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router) {}
    fname: any;
    lname: any;
    emailval: any;
    passwrd: any;
    name: any;
    data: any;
    register() {
    if (this.fname && this.lname && this.emailval && this.passwrd !== '') {
      localStorage.setItem('name', this.name);
      localStorage.setItem('emaildata', this.emailval);
      localStorage.setItem('passwrd', this.passwrd);
      this.router.navigate(['/login']);
      // this.data = "Hurry!! Registered Successfully";
    }
    else {
      this.data = "Please fill the datas!!!!";
    }
}
  ngOnInit() {
  }

}
