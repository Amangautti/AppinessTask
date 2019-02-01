import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '../Model/user-interface';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  submitted: Boolean;
  userInterface: UserInterface = new UserInterface();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobilePattern = '^[2-9]{2}[0-9]{8}$';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerUser(user) {

    this.passwordVal();
    if (this.isValidUser()) {
      sessionStorage.setItem('userName', user.userName);
      sessionStorage.setItem('name', user.name);
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('mobileNumber', user.mobileNumber);
      sessionStorage.setItem('address', user.address);
      window.alert('User Signup successfully.');
      this.router.navigate(['./home']);
    }
  }

  passwordVal(): Boolean {

    if (this.userInterface.password !== this.userInterface.confirmPassword) {
      window.alert('Please enter correct password');
      return false;
    }
    return true;
  }

  isValidUser(): Boolean {

    if (!this.userInterface.userName || !this.userInterface.password ||
      !this.userInterface.email || !this.userInterface.mobileNumber ||
      !this.userInterface.address) {
      this.submitted = true;
      return false;
    }
    return true;
  }

}
