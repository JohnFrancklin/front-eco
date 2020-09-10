import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interfaces/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  displayPopup = 'none';
  show: boolean;
  users = new Users();

  constructor(
    private usersService: UsersService,
    private router: Router) {
    this.show = false;
  }

  ngOnInit(): void {
  }

  // ********
  // Connexion
  // ********
  login(loginForm: NgForm) {
    console.log(loginForm.value);
    this.usersService.login(loginForm.value).subscribe(result => {
      console.log("le retour login", result);
      // localStorage.setItem("accessToken",result.accessToken);
      document.cookie = result.accessToken;

      this.router.navigate(['/dashboard/produits'])
        .then(() => {
          window.location.reload();
        });

    })
  }

  readcookie() {
    let k = "accessToken";
    var x = document.cookie;
    console.log(x);
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
