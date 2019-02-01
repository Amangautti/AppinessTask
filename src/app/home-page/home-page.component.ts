import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  currentUser;
  users = [];
  userName: String;
  name: String;
  email: String;
  password: String;
  confirmPassword: String;
  mobileNumber: Number;
  address: any;

  constructor(private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userName = sessionStorage.getItem('userName');
    this.name = sessionStorage.getItem('name');
    this.email = sessionStorage.getItem('email');
    this.mobileNumber = Number(sessionStorage.getItem('mobileNumber'));
    this.address = sessionStorage.getItem('address');
    // alert('You are going to load the user');
  }

  back() {
    this.router.navigate(['./signup']);
  }

}
