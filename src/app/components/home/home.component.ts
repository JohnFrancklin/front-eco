import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SidebarComponent } from 'src/app/layouts/sidebar/sidebar.component';
import { ProduitService } from 'src/app/services/produit.service';

// rxjs
import { Observable} from 'rxjs';
import { debounceTime, switchMap, startWith, map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // styles: [`
  //   .custom-tooltip .tooltip-inner {
  //     background-color : white;
  //     color: black;
  //     border: 1px solid lightgray;
  //   }

  //   .custom-tooltip .arrow::before {
  //     border-top-color: white;
  //   }
  // `]
})
export class HomeComponent implements OnInit, OnDestroy {

  keySearch: string;
  searchFilter: string;

  /* Variable pour le panier */
  panierTotal = [];
  /************************* */
  produits: any;

  /****id_user simulation */
  id_user = 123456789;

  /**** nouveau vote */
  voteNew;


  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getKeySearch();
    this.getPanier();
    this.getProduit();

  }


  getProduit() {
    this.produits = this.produitService.getProduit();
    let panierOriginal = localStorage.getItem("panier");
    if (!panierOriginal) {
      localStorage.setItem("panier", '[]');
      let panier = localStorage.getItem("panier");
      this.panierTotal = JSON.parse(panier);
    } else {
      this.panierTotal = JSON.parse(panierOriginal);
    }
    for (let i = 0; i < this.produits.length; i++) {
      for (let j = 0; j < this.panierTotal.length; j++) {
        if (this.produits[i]._id === this.panierTotal[j].id_produit) {
          this.produits[i].panier = true;
        }
        // else{
        //   this.produits[i].panier = 'green';
        // }
      }
    }

    // vote
    for (let i = 0; i < this.produits.length; i++) {
      const a_voter = this.produits[i].vote.includes(this.id_user);
      if (a_voter) {
        this.produits[i].a_vote = true;
      }
      else {
        this.produits[i].a_vote = false;
      }
    }
  }


  ngOnDestroy() {

  }


  rechercheProduit(key) {

    document.cookie = "keySearch = " + this.keySearch + "";    
  }


  getKeySearch() {
    let a = `; ${document.cookie}`.match(`;\\s*${'keySearch'}=([^;]+)`);
    this.keySearch = a ? a[1] : '';
    return a ? a[1] : '';
  }

  clearInputSearch() {
    this.keySearch = "";
    document.cookie = "keySearch=keySearch; expires=Thu,01 Jan 1970 00:00:00 UTC;";
  }

  getPanier() {
    let panierOriginal = localStorage.getItem("panier");
    this.panierTotal = JSON.parse(panierOriginal);
  }

  setPanier() {
    let paniers = JSON.stringify(this.panierTotal)
    localStorage.setItem("panier", paniers);
  }

  addOrRemovePanier(produits) {
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
    let result: boolean = this.panierTotal.some(checkIdProduit);    // if produit exist, return true
    if (result == true) {
      /**enlever du panier si le produit existe deja dedans */
      this.panierTotal = this.panierTotal.filter((item) => {
        return item.id_produit !== id_produit;
      });
    } else {
      /**ajouter dans le panier si le produit n'y est encore pas */
      this.panierTotal.push(produitAjouter);
    }

    this.setPanier();

    const indexOfProduit = this.produits.map(e => e._id).indexOf(id_produit);
    if (this.produits[indexOfProduit].panier == true) {
      this.produits[indexOfProduit].panier = "";
    } else {
      this.produits[indexOfProduit].panier = true;
    }

  }

  addOrRemoveVote(produits) {
    // check if id_user exists dans le vote du produits
    const a_voter = produits.vote.includes(this.id_user);
    const indexOfIdUser = produits.vote.indexOf(this.id_user);

    if (a_voter) {
      produits.vote.splice(indexOfIdUser, 1);
      produits.a_vote = false;
    }
    else {
      produits.vote.push(this.id_user);
      produits.a_vote = true;
    }
  }


  modifierIcon(id_produit) {
    //icon du panier//
    const indexOfProduit = this.produits.map(e => e._id).indexOf(id_produit);
    if (this.produits[indexOfProduit].panier == true) {
      this.produits[indexOfProduit].panier = "";
    } else {
      this.produits[indexOfProduit].panier = true;
    }

  }







}
