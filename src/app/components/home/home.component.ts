import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  produits = ["fdf","dfdf","rer","fdf","dfdf","rer","fdf","dfdf","rer","fdf","dfdf","rer"]

  constructor() { }

  ngOnInit(): void {
  }

}
