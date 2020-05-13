import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  produits: any;
  oneProduit: any;
  produitSelected = [];

  oneAndAll: boolean = true;

  title = "Smartphone G10 2e";



  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit() {
    this.produits = this.produitService.getProduit();
    this.oneProduit = this.produits[0];
  }


  getOneProduit(oneProduit) {
    this.oneProduit = oneProduit;
  }


  toggleOneAndAll() {
    if (this.oneAndAll == true) {
      this.oneAndAll = false;

      /** attendre le chargement de la vue */
      setTimeout(() => {
        this.setCheckedProduit();
      }, 10);
      //********************************** */
    } else {
      this.oneAndAll = true;
    }
  }

  selectProduit(p) {
    /**check si id_produit existe dans le produitSelected */
    const checkIdProduit = obj => obj._id === p._id;
    let result: boolean = this.produitSelected.some(checkIdProduit);
    if (result == true) {
      /**enlever du produitSelected si le produit existe deja dedans */
      this.produitSelected = this.produitSelected.filter(function (item) {
        return item._id !== p._id;
      });
    } else {
      /**ajouter dans le produitSelected si le produit n'y est encore pas */
      this.produitSelected.push(p);
    }
  }

  removeFromProduitSelected(p) {
    //***supprimer du tableau */
    this.produitSelected = this.produitSelected.filter(function (item) {
      return item._id !== p._id;
    });
    //**** dechecker le produit */  
    const checkElement = document.getElementById(p._id) as HTMLInputElement;
    checkElement.checked = false;

  }

  setCheckedProduit() {
    let idChecked = [];
    for (let i = 0; i < this.produits.length; i++) {
      for (let j = 0; j < this.produitSelected.length; j++) {
        if (this.produits[i]._id === this.produitSelected[j]._id) {
          idChecked.push(this.produits[i]._id);
        }
      }
    } //on peut fusionner les boucles, mais ca crée un bug apres
    for (let i = 0; i < idChecked.length; i++) {
      const checkElement = document.getElementById(idChecked[i]) as HTMLInputElement;
      checkElement.checked = true;
    }
  }




}
