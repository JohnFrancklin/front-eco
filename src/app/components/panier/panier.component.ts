import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  panierTotal: any;
  step = 0;
  prixTotal=0;
  service = 200;
  transport = 300;
  netPayer = 0;

  // home : HomeComponent = new HomeComponent (ProduitService:ProduitService);

  constructor() { }

  ngOnInit(): void {
    this.getPanier();
    this.calculTotal();
  }


  getPanier(){
    let panierOriginal = localStorage.getItem("panier");
    this.panierTotal = JSON.parse(panierOriginal);
  }

  setPanier(){
    let paniers = JSON.stringify(this.panierTotal)
    localStorage.setItem("panier",paniers);
  }

  removeFromPanier(id_produit){

    /**check si id_produit existe dans le panier */
    const checkIdProduit = obj => obj.id_produit === id_produit;
    let result:boolean = this.panierTotal.some(checkIdProduit); 
    if(result == true){
      /**enlever du panier si le produit existe deja dedans */
      this.panierTotal = this.panierTotal.filter(function(item) { 
        return item.id_produit !== id_produit; 
      });
    }else{
      /**ajouter dans le panier si le produit n'y est encore pas */
      // this.panierTotal.push(produitAjouter);
    }

    let paniers = JSON.stringify(this.panierTotal)
    localStorage.setItem("panier",paniers);
    this.calculTotal();
  }



  addQantity(id_produit){    
    const indexOfProduit = this.panierTotal.map(e => e.id_produit).indexOf(id_produit);
    let quantity = this.panierTotal[indexOfProduit].quantiteProduitPanier;
    let newQuantite = quantity + 1 ; 
    this.panierTotal[indexOfProduit].quantiteProduitPanier = newQuantite;
    this.setPanier();
    this.calculTotal();
  }

  removeQuantity(id_produit){
    const indexOfProduit = this.panierTotal.map(e => e.id_produit).indexOf(id_produit);
    let quantity = this.panierTotal[indexOfProduit].quantiteProduitPanier;
    let newQuantite = quantity - 1 ; 
    this.panierTotal[indexOfProduit].quantiteProduitPanier = newQuantite;
    if(newQuantite<1){
      this.panierTotal[indexOfProduit].quantiteProduitPanier = 1;
    }
    this.setPanier();
    this.calculTotal();
  }


  calculTotal(){
    this.getPanier();
    this.prixTotal = 0;
    for(let i=0; i<this.panierTotal.length; i++){
      this.panierTotal[i].prixProduitPanier = this.panierTotal[i].prix * this.panierTotal[i].quantiteProduitPanier;
      this.prixTotal = this.prixTotal + this.panierTotal[i].prix * this.panierTotal[i].quantiteProduitPanier;
    }
    this.netPayer = this.prixTotal + this.service + this.transport;
  }




}
