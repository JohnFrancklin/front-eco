import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public username: String;
  // public pwd: String;

  displayPopup = 'none';
  show: boolean;
  msgError = 'none';

  users = new Users();

  constructor(private usersService: UsersService) { 
    this.show = false;
  }

  ngOnInit(): void {
  }

  // ********
  // Connexion
  // ********
  connect(login: NgForm) {  //login
    console.log("Login", login.value);
    const username = login.value['username'];
    const password = login.value['password'];
    if ((username !=='' && password !=='' ) && (username !==undefined && password !==undefined)) {
      console.log(this.users);
    this.usersService.addLogin(username, password); // objet send   connect
    this.msgError = 'none';
    }else {
      this.msgError = 'block';
    }

  }

  // login() {
  //   console.log(this.username, this.pwd);
  // }


  showPopup() {
    this.displayPopup = 'block';
  }

  closeState() {
    this.displayPopup = 'none';
  }

  checkValue() {
    this.show = !this.show; 
  }

}
