import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  displayPopup = 'none';
  show: boolean;

  constructor() { 
    this.show = false;
  }

  ngOnInit(): void {
  }

  showPopup() {
    this.displayPopup = 'block';
  }

  closeState() {
    this.displayPopup = 'none';
  }

  password() {
    this.show = !this.show; 
  }

}
