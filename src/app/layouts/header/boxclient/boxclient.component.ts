import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxclient',
  templateUrl: './boxclient.component.html',
  styleUrls: ['./boxclient.component.css']
})
export class BoxclientComponent implements OnInit {

  panierTotal = [];


  constructor() {
    
   }

  ngOnInit(): void {
    this.setPanier();
  }

  setPanier(){
    let panierOriginal = localStorage.getItem("panier");
    if(!panierOriginal){
      localStorage.setItem("panier","[]");
    }
    else{
      this.panierTotal = JSON.parse(panierOriginal);
    }
  }

  getPanier(){
    let panierOriginal = localStorage.getItem("panier");
    this.panierTotal = JSON.parse(panierOriginal);
    console.log("Le panier", this.panierTotal);
  }

  clearPanier(){
    this.panierTotal = ["fdfd"];
    // localStorage.clear();
  }


}
