import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SidebarComponent } from 'src/app/layouts/sidebar/sidebar.component';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  keySearch: string;
  searchFilter: string;

  /* Variable pour le panier */
  panierTotal = [];
  /************************* */
  produits:any;


  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getKeySearch();
    this.getPanier();
    this.getProduit();
  }

  getProduit(){
    this.produits = this.produitService.getProduit();
    let panierOriginal = localStorage.getItem("panier");
    if(!panierOriginal){
      localStorage.setItem("panier",'[]');
      let panier = localStorage.getItem("panier");
      this.panierTotal = JSON.parse(panier);
    }else{
      this.panierTotal = JSON.parse(panierOriginal);      
    }
    for(let i=0; i<this.produits.length; i++){
      for(let j=0; j<this.panierTotal.length; j++){
        if(this.produits[i]._id === this.panierTotal[j].id_produit){
          this.produits[i].panier = 'red';
          console.log(i,this.produits[i]);
        }
        // else{
        //   this.produits[i].panier = 'green';
        // }
      }
    }
  }


  ngOnDestroy(){
 
  }


  rechercheProduit(key){
    document.cookie = "keySearch = " + this.keySearch + "";   
  }

  getKeySearch(){
    let a = `; ${document.cookie}`.match(`;\\s*${'keySearch'}=([^;]+)`);
    this.keySearch = a ? a[1] : '';
    return a ? a[1] : '';
  }

  clearInputSearch(){
    this.keySearch = "";
    document.cookie = "keySearch=keySearch; expires=Thu,01 Jan 1970 00:00:00 UTC;"; 
  }

  getPanier(){
    let panierOriginal = localStorage.getItem("panier");
    this.panierTotal = JSON.parse(panierOriginal);
  }

  addOrRemovePanier(produits){
    // il faut utiliser le session ici, mais pour l'instant on va utiliser le cookie
      /**recuperer ce qu il ya dans le panier */
    this.getPanier();
 
    let quantite = 1;
    let produitAjouter = {};

    let id_produit = produits._id;


    produitAjouter['id_produit'] = id_produit;
    produitAjouter['title'] = produits.title;
    produitAjouter['description'] = produits.description;
    produitAjouter['prix'] = produits.prix.prix;
    produitAjouter['quantite'] = produits.quantite;
    produitAjouter['quantiteProduitPanier'] = quantite; 
    
    
    /**check si id_produit existe dans le panier */
    const checkIdProduit = obj => obj.id_produit === id_produit;
    let result:boolean = this.panierTotal.some(checkIdProduit);    // if produit exist, return true
    if(result == true){
      /**enlever du panier si le produit existe deja dedans */
      this.panierTotal = this.panierTotal.filter(function(item) { 
        return item.id_produit !== id_produit; 
      });
    }else{
      /**ajouter dans le panier si le produit n'y est encore pas */
      this.panierTotal.push(produitAjouter);
    }

    let paniers = JSON.stringify(this.panierTotal)
    localStorage.setItem("panier",paniers);

    const indexOfProduit = this.produits.map(e => e._id).indexOf(id_produit);
    console.log("l'index de produits", indexOfProduit);
    
    if(this.produits[indexOfProduit].panier == 'red'){
      this.produits[indexOfProduit].panier = "";
    }else{
      this.produits[indexOfProduit].panier = "red";
    }
  
  }


  modifierIcon(id_produit){
    console.log("id_produits got", id_produit);
    this.getProduit();

    const indexOfProduit = this.produits.map(e => e._id).indexOf(id_produit);

    if(this.produits[indexOfProduit].panier == 'red'){
      this.produits[indexOfProduit].panier = "";
    }else{
      this.produits[indexOfProduit].panier = "red";
    }
    
  }







}
