import { Component, OnInit } from '@angular/core';
import { UserInterface, UserInterfaceLogin } from '../Model/user-interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  submitted: Boolean;
  userInterfaceLogin: UserInterfaceLogin = new UserInterfaceLogin();

  constructor() { }

  ngOnInit() {
  }

  submit(user) {

    if (this.isValidUser()) {
      window.alert('User Logged In successfully.');
    }

  }

  isValidUser(): Boolean {

    if (!this.userInterfaceLogin.userName || !this.userInterfaceLogin.password) {
      this.submitted = true;
      return false;
    }
    return true;
  }

}
