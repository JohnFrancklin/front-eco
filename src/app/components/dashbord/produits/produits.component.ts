import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  produits:any;
  oneProduit:any;
  produitSelected = [];

  oneAndAll:boolean = true;

  title = "Smartphone G10 2e";








  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getProduit();

  }

  getProduit() {
    this.produits = this.produitService.getProduit();
    this.oneProduit = this.produits[0];
  }

  getOneProduit(oneProduit){
    console.log(oneProduit);
    this.oneProduit = oneProduit;
  }


  toggleOneAndAll(){
    if(this.oneAndAll == true){
      this.oneAndAll = false;
    }else{
      this.oneAndAll = true;
    }
  }

  selectProduit(p){
    /**check si id_produit existe dans le produitSelected */
    const checkIdProduit = obj => obj._id === p._id;
    let result:boolean = this.produitSelected.some(checkIdProduit); 
    if(result == true){
      /**enlever du produitSelected si le produit existe deja dedans */
      this.produitSelected = this.produitSelected.filter(function(item) { 
        return item._id !== p._id; 
      });
    }else{
      /**ajouter dans le produitSelected si le produit n'y est encore pas */
      this.produitSelected.push(p);
    }
  }

  removeFromProduitSelected(p){
    //***supprimer du tableau */
    this.produitSelected = this.produitSelected.filter(function(item) { 
      return item._id !== p._id; });
    //**** dechecker le produit */  
    const checkElement = document.getElementById(p._id) as HTMLInputElement;
    checkElement.checked = false;

    
  }





}
