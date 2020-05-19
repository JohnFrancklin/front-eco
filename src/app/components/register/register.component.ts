
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/service/users.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users = new Users();
  submitted = false;

  constructor(
    private usersService: UsersService,
    private location: Location
  ) { }


  ngOnInit(): void {
  };

  newUsers(): void {
    this.submitted = false;
    this.users = new Users();
  }

  addUsers() {
    this.submitted = true;
    this.save();
  }
 
   goBack(): void {
     this.location.back();
   }
 
   private save(): void {
     console.log(this.users);
     this.usersService.addUsers(this.users)
         .subscribe();
   }
}
