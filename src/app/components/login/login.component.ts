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

  displayPopup = 'none';
  show: boolean;
  users = new Users();

  constructor(private usersService: UsersService) { 
    this.show = false;
  }

  ngOnInit(): void {
  }

  // ********
  // Connexion
  // ********
  login(loginForm: NgForm) {
    this.usersService.login(loginForm.value);

  }


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
