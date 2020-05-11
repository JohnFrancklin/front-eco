import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  images = ["jkjj","jkjk","jkjk"];
  
  produit:any;
  panierTotal;


  constructor(public activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    //on recupere les valeurs envoyées depuis routerLink
    this.produit = JSON.parse(this.activatedRoute.snapshot.queryParamMap.get('produitselected'));
  }

  getPanier(){
    let panierOriginal = localStorage.getItem("panier");
    this.panierTotal = JSON.parse(panierOriginal);
  }
  
  setPanier(){
    let paniers = JSON.stringify(this.panierTotal)
    localStorage.setItem("panier",paniers);
  }
    
  addOrRemovePanier(){
    // il faut utiliser le session ici, mais pour l'instant on va utiliser le cookie
      /**recuperer ce qu il ya dans le panier */
    this.getPanier();

    let quantite = 1;
    let produitAjouter = {};

    produitAjouter['id_produit'] = this.produit._id;
    produitAjouter['title'] = this.produit.title;
    produitAjouter['description'] = this.produit.description;
    produitAjouter['prix'] = this.produit.prix.prix;
    produitAjouter['quantite'] = this.produit.quantite;
    produitAjouter['quantiteProduitPanier'] = quantite; 
    
    /**check si id_produit existe dans le panier */
    const checkIdProduit = obj => obj.id_produit === this.produit._id;
    let result:boolean = this.panierTotal.some(checkIdProduit); 
    if(result == true){
      /**enlever du panier si le produit existe deja dedans */      
      this.panierTotal = this.panierTotal.filter((item)=> { 
        return item.id_produit !== this.produit._id;
      });
    }else{
      /**ajouter dans le panier si le produit n'y est encore pas */
      this.panierTotal.push(produitAjouter);
    }

    this.setPanier();

    if(this.produit.panier == true){
      this.produit.panier = "";
    }else{
      this.produit.panier = true;
    }
  }




}
