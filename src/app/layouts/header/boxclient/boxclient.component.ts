import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxclient',
  templateUrl: './boxclient.component.html',
  styleUrls: ['./boxclient.component.css']
})
export class BoxclientComponent implements OnInit {

  panierTotal = [];
  prixTotal=0;
  service = 200;
  transport = 300;
  netPayer = 0;

  displayTool = 'none';


  constructor() {
    
   }

  ngOnInit(): void {
    this.setPanier();
    this.getPanier();
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
  }

  clearPanier(){
    this.panierTotal = ["fdfd"];
    // localStorage.clear();
  }

  ShowDetailPanier(e) {
    this.calculTotal();
    this.displayTool = "block";
  }

  HideDetailPanier(e) {
    this.displayTool = "none";
  }

  calculTotal() {
    this.getPanier();
    this.prixTotal = 0;
    for(let i=0; i<this.panierTotal.length; i++){
      this.panierTotal[i].prixProduitPanier = this.panierTotal[i].prix * this.panierTotal[i].quantiteProduitPanier;
      this.prixTotal = this.prixTotal + this.panierTotal[i].prix * this.panierTotal[i].quantiteProduitPanier;
    }
    this.netPayer = this.prixTotal + this.service + this.transport;
  }
  
}
