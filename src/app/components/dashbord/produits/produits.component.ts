import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import * as CanvasJS from 'canvasjs';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  produits:any;
  oneProduit:any;

  title = "Smartphone G10 2e";


  //********************************* */





//***************************************** */






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






}
