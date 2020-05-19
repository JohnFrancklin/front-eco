import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  // panier = 0;

  // @ViewChildren (HomeComponent) homeComponent: HomeComponent;

   @ViewChildren (HomeComponent) homeComponent = new HomeComponent(this.produitService);


  constructor(private produitService: ProduitService) {

   }

  ngOnInit(): void {

  }
  



}
