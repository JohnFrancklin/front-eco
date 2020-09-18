
import { Component, OnInit } from '@angular/core';
// import { Users } from 'src/app/interfaces/users';

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

  // users = new Users();
  submitted = false;

  show: boolean;

  emailExist: boolean;
  userExist: boolean;

  allEmail: any = [];
  allListeUser: any = [];
  allUser: any = [];
  arrayUser: any=[];


  invalidMail: boolean;
  invalidConfirmPassword: boolean;

  userEmails = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  });

  users = {
    _id: "",
    email: "",
    username: "",
    password: "",
    nom: "",
    prenom: "",
    sexe: "",
    adresse: "",
    ville: "",
    pays: "",
    codePostal: "",
    tel: "",
    role: [],
    avatar: "",
    verification: "",
    refreshTookken: "",
    confirmPassword: ""
  };

  constructor(
    private usersService: UsersService,
    private location: Location
  ) { this.show = false; }


  ngOnInit(): void {
    this.getExistAll()
  };

  newUsers(): void {
    this.submitted = false;
    // this.users = new Users();
  }

  addUsers(addUserForm: NgForm) {

    this.detectExiste(addUserForm.value.email, addUserForm.value.username);
    if (this.emailExist !== true && this.userExist !== true && this.invalidMail !== true  &&  this.invalidConfirmPassword !== true) {
      this.submitted = true;
      this.save();
    }
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    const registerObject = {
      nom: this.users.nom,
      prenom: this.users.prenom,
      adresse: this.users.adresse,
      tel: this.users.tel,
      pays: this.users.pays,
      ville: this.users.ville,
      username: this.users.username,
      email: this.users.email,
      passwword: this.users.password,
      codePostal: this.users.codePostal,
      sexe: this.users.sexe,
    }    
    console.log(registerObject);
    this.usersService.addUsers(registerObject).subscribe();
    
  }


  getExistAll() {
    return this.usersService.getUsers().subscribe(
      users => {
        this.allListeUser = users;
        for (let index = 0; index < this.allListeUser.users.length; index++) {
          this.allEmail.push(this.allListeUser.users[index].email);
          this.allUser.push(this.allListeUser.users[index].username)
          this.arrayUser.push(this.allListeUser.users[index])
        }
      }

      
    )

  }


  detectExiste(email, username) {
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

  passwordFunction() {
    this.show = !this.show;
  }

  ConfirmPassword(password, confirmPassword) {
    if (password != confirmPassword) {
      this.invalidConfirmPassword = true
    } else {
      this.invalidConfirmPassword = false
    }
  }

}
