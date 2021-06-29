import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CommandesService } from 'src/app/services/commandes.service';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  oneAndAll: boolean = true;
  showFilter: boolean = false;
  Transparent_overlay: boolean = false;
  showDetailListStat: boolean = false;
  listDetailToShow: string;  // vote ou favoris ou vu ou commande
  titleDetailListStat: string;
  loadMore: boolean = false;
  indexCommande = 0;
  totalCommande:any;
  commandes: any;
  scrollSpace = 0;  // espace vide scroll
  createType: boolean = false;

  paramGetCustomized = 1;
  //--------Variables pour spinner-------//spinner_loadMore

  spinner_loadMore = "spinner_loadMore";
  spinner_list_utilisateurs = "spinner_list_utilisateurs";

  spinner_type = "line-scale";
  spinner_size = "10px";
  spinner_background = "rgba(100,100,100,0.1)"
  //------------------------------------//
  selectClient = [];
  // variable pour datatable//

  //---------------------------------------------------//

  // Commandes
 detailCmd : any = 
    {
      id : "",
    updateAt : "",
    client : "",
    adresse : "",
    note_delivrance : "",
    etat : "",
    tracage : {
        email : "",
        tel : "",
        estimation_delivrance: ""
      },
      payment: {
        methode : "",
        transaction_id : "",
        amount : "",
        codepromo : ""
      },
      commandes : [
        {
        
          title : "",
          quantite : "",
          prix_unitaire :"",
          curency : ""
        }
      ],
    date_creation :"",
      numero_commande : "",
       
    }
  

  constructor(
              private spinner: NgxSpinnerService,
              private commandesService: CommandesService) {

   }


  ngOnInit(): void {
        /**************SPINNER TEST ************* */
        this.spinner.show(this.spinner_list_utilisateurs);//start loader
        setTimeout(() => {
          this.spinner.hide(this.spinner_list_utilisateurs);//stop loader
        }, 500);
        /************************************** */
    
        // this.getCommandes();
        this.getAllCommandes();     
        
  }



  // getCommandes(){     
  //   this.commandes = this.commandesService.getCommandes();
  //   console.log("les commandes", this.commandes);
  //   this.detailCmd = this.commandes[0];
  //   console.log('Liste des commandes',this.detailCmd)
  // }

  getAllCommandes(){
    this.commandesService.getAllCommandes().subscribe(resultat => {
      console.log("resultat", resultat);
      this.commandes = resultat['value'][0];
      this.detailCmd = this.commandes[0];
    });

  }

   sort(ascending, columnClassName, tableId)
		{
			let tbody = document.getElementById(tableId).getElementsByTagName("tbody")[0];
			let rows = tbody.getElementsByTagName("tr");
			let unsorted = true;
			while(unsorted)
			{
				unsorted = false
				for (let r = 0; r < rows.length - 1; r++)
				{
					let row = rows[r];
					let nextRow = rows[r+1];
					
					let value: any = row.getElementsByClassName(columnClassName)[0].innerHTML;
					let nextValue: any = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;
					
					value = value.replace(',', ''); // in case a comma is used in float number
					nextValue = nextValue.replace(',', '');
					
					if(!(value))
					{
						value = parseFloat(value);
						nextValue = parseFloat(nextValue);
					}
					
					if (ascending ? value > nextValue : value < nextValue)
					{
						tbody.insertBefore(nextRow, row);
						unsorted = true;
					}
				}
			}
		};


  toggleOneAndAll() {
    if (this.oneAndAll == true) {
      this.oneAndAll = false;

      /** attendre le chargement de la vue */
      setTimeout(() => {
        // this.setCheckedProduit();
      }, 10);
      //********************************** */
    } else {
      this.oneAndAll = true;
    }
  }

  afficherFiltre() {
    if (this.showFilter == false) {
      this.showFilter = true;
      this.Transparent_overlay = true;
    }
    else {
      this.showFilter = false;
      this.Transparent_overlay = false;
    }
    this.showDetailListStat = false;
  }


  hideOverlay() {
    this.Transparent_overlay = false;
    this.showFilter = false;
    this.showDetailListStat = false;
  }



  scrolled() {

    let element = document.getElementById('element');

    // console.log("scrollheight",element.scrollHeight);
    // console.log("scrolltop", element.scrollTop);
    // console.log("offsetHeight", element.offsetHeight);
    // console.log("total ",element.offsetHeight + element.scrollTop);

    let total = element.offsetHeight + element.scrollTop - this.scrollSpace;
    total = total + 1; // pour le decalage sur firefox

    if (element.scrollHeight <= total) {


      this.paramGetCustomized = this.paramGetCustomized + 1;
      // console.log("Le parametre de recuperation", this.paramGetCustomized);

      this.loadMore = true;
      this.spinner.show(this.spinner_loadMore);
      this.scrollSpace = 20;

      setTimeout(() => {
        this.spinner.hide(this.spinner_loadMore);
        // this.loadMore = false;
        this.scrollSpace = 0;
        // let newProduits = this.produitService.getProduit();
        //concatenation produit a newProduit
        // this.produits = this.produits.concat(newProduits);
        // console.log("aprs concat", this.produits);

      }, 2000);

    }

  }

  // OAKOKAOAKOAKO****
  getOneCommande(c,i) {
      this.detailCmd = c;
      this.detailCmd['index']=i;
      this.indexCommande =i;
      console.log("index commande", this.indexCommande)  
      this.getTotal()
  }

  getTotal (){
    let i = this.indexCommande;
    let total = 0;  
      let com = this.commandes[i];
      // console.log('commande liste',com)
        for ( let j=0; j<com.commandes.length; j++){
          let listCom = com.commandes[j];
          total = (listCom.prix_unitaire * listCom.quantite) + total;
          this.totalCommande = total;
        }   
    return total;
}

}
