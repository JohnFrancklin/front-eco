
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';

import { Location } from '@angular/common';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

declare var Swal: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users = new Users();
  submitted = false;

  emailExist: boolean;
  userExist: boolean;
  
  allEmail: any = [];
  allListeUser: any = [];
  allUser: any =[];

  invalidMail: boolean;

  userEmails = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    });  

  constructor(
    private usersService: UsersService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.getExistAll()
  };

  newUsers(): void {
    this.submitted = false;
    this.users = new Users();
  }

  addUsers(addUserForm: NgForm) {

    this.detectExiste(addUserForm.value.email, addUserForm.value.username); 
    if (this.emailExist !== true  &&  this.userExist !== true  && this.invalidMail !== true ) {
      this.submitted = true;
      this.save();
    }
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.users);
    this.usersService.addUsers(this.users)
      .subscribe();
  }


  getExistAll() {
    return this.usersService.getUsers().subscribe(
      users => {
        this.allListeUser = users;
        for (let index = 0; index < this.allListeUser.users.length; index++) {
          this.allEmail.push(this.allListeUser.users[index].email);
          this.allUser.push(this.allListeUser.users[index].username)
        }
      }
    )

  }


  detectExiste(email,username) {
    if (this.allEmail.includes(email)) {
      this.emailExist = true;
    } else {
      this.emailExist = false;
    }

    if (this.allUser.includes(username)) {
      this.userExist = true;
    } else {
      this.userExist = false;
    }
  }

  keyEmail(event) {
    if (!event.target.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/)) {
      this.invalidMail = true;
    } else {
      this.invalidMail = false;
     
    }
  }
}
