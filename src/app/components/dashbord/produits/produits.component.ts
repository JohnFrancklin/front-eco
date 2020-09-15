import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogContainer } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar } from '@angular/material/snack-bar';


import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: any;
  // oneProduit: any;
  produitSelected = [];
  searchText: any;
  oneAndAll: boolean = true;
  durationSnackBar = 4000;

  oneProduit = {
    _id: "",
    categorie: 45,
    etat: "sandbox",
    description: "",
    vu: 0,
    garantie: "0",
    provenance: "",
    marque: "",
    detail_fabrication: {
      date_sortie: "",
      numero_model: "",
    },
    detail_physique: {
      largeur: "",
      longueur: "",
      poids: "",
      couleur: "",
      taille: ""
    },
    favoris: [],
    images: [],
    prix: {
      prix_normal: "",
      prix_promotion: ""
    },
    quantite: "",
    titre: "",
    vote: [],
    index: ""
  };


  showFilter: boolean = false;
  showDetailListStat: boolean = false;
  listDetailToShow: string;  // vote ou favoris ou vu ou commande
  titleDetailListStat: string;
  Transparent_overlay: boolean = false;

  createType: boolean = false;
  loadMore: boolean = false;
  scrollSpace = 0;  // espace vide scroll

  paramGetCustomized = 1;
  state_to_change = "";

  //--------Variables pour spinner-------//spinner_loadMore
  spinner_list_Produit = "spinner_list_Produit";
  spinner_list_user = "spinner_list_user";
  spinner_loadMore = "spinner_loadMore";

  spinner_type = "line-scale";
  spinner_size = "10px";
  spinner_background = "rgba(100,100,100,0.1)"
  //------------------------------------//

  title = "Smartphone G10 2e";

  @ViewChild('imageProduit') imageProduit: TemplateRef<any>;
  @ViewChild('dialogBox') dialogBox: TemplateRef<any>;



  constructor(
    private produitService: ProduitService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProduit();

    /**************SPINNER TEST ************* */
    this.spinner.show(this.spinner_list_Produit);//start loader
    setTimeout(() => {
      this.spinner.hide(this.spinner_list_Produit);//stop loader
    }, 500);
    /************************************** */
  }

  createProduct() {

    const productObject = {
      titre: this.oneProduit.titre,
      description: this.oneProduit.description,
      date_sortie: this.oneProduit.detail_fabrication.date_sortie,
      numero_model: this.oneProduit.detail_fabrication.numero_model,
      largeur: this.oneProduit.detail_physique.largeur,
      longueur: this.oneProduit.detail_physique.longueur,
      poids: this.oneProduit.detail_physique.poids,
      taille: this.oneProduit.detail_physique.taille,
      garantie: this.oneProduit.garantie,
      prix_normal: this.oneProduit.prix.prix_normal,
      prix_promotion: this.oneProduit.prix.prix_promotion,
      provenance: this.oneProduit.provenance,
      quantite: this.oneProduit.quantite,
      marque: this.oneProduit.marque,
      couleur: this.oneProduit.detail_physique.couleur,
      etat: this.oneProduit.etat,
      // categorie: "5f0ff8cee892a5408c1aae39",
      // createur: 'RASOA',
    }

    let isValid = true;
    let listInputAndTextearea = Object.keys(productObject); // retour les listes des clés objet productObject dans un tableau    
    for (let i = 0; i < listInputAndTextearea.length; i++) {
      let element = document.getElementById(listInputAndTextearea[i]) as HTMLInputElement;
      if (element.value == "") {
        element.style.borderColor = "red";
        isValid = false;
      } else {
        element.style.borderColor = "#d5d5d5";
      }
    }

    if (isValid) {
      productObject["categorie"] = "5f0ff8cee892a5408c1aae39"; // assigne clé categorie dans l"objet
      if (confirm("Voullez-vous ajouter ce produit ?")) {
        this.produitService.createProduct(productObject).subscribe(result => {
          // console.log("create success", result);
          this.snackBar.open("[" + result['titre'] + "] a été ajouté avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          this.produits.push(result);
        });
        console.log(productObject);
      }

    } else {
      console.log("champ encore vide");
    }
  }

  updateProduct() {
    const productObject = {
      // id: this.oneProduit._id,
      titre: this.oneProduit.titre,
      description: this.oneProduit.description,
      date_sortie: this.oneProduit.detail_fabrication.date_sortie,
      numero_model: this.oneProduit.detail_fabrication.numero_model,
      largeur: this.oneProduit.detail_physique.largeur,
      longueur: this.oneProduit.detail_physique.longueur,
      poids: this.oneProduit.detail_physique.poids,
      taille: this.oneProduit.detail_physique.taille,
      garantie: this.oneProduit.garantie,
      prix_normal: this.oneProduit.prix.prix_normal,
      prix_promotion: this.oneProduit.prix.prix_promotion,
      provenance: this.oneProduit.provenance,
      quantite: this.oneProduit.quantite,
      marque: this.oneProduit.marque,
      couleur: this.oneProduit.detail_physique.couleur,
      etat: this.oneProduit.etat,
      // categorie: "5f0ff8cee892a5408c1aae39",
      // createur: 'RASOA',
    }

    let isValid = true;
    let listInputAndTextearea = Object.keys(productObject);
    for (let i = 0; i < listInputAndTextearea.length; i++) {
      let element = document.getElementById(listInputAndTextearea[i]) as HTMLInputElement;
      if (element.value == "") {
        element.style.borderColor = "red";
        isValid = false;
      } else {
        element.style.borderColor = "#d5d5d5";
      }
    }

    if (isValid) {
      productObject["categorie"] = "5f0ff8cee892a5408c1aae39"; // assigne clé categorie dans l"objet
      if (confirm("Voullez-vous modifier " + this.oneProduit.titre + "?")) {
        this.produitService.updatePoduct(productObject, this.oneProduit._id).subscribe(result => {
          this.snackBar.open("[" + result['titre'] + "] a été modifié avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        });
      } else {
      }
      // console.log(productObject);
    } else {
      console.log("champ encore vide");
    }

  }

  launchOrArhiveOrDelete() {
    let body = {
      acteur: "rakoto"
    };
    const dialogRef = this.dialog.open(this.dialogBox); //ouverture dialog
    dialogRef.afterClosed().subscribe(result => {       //recuperation decision utilisateur:  result= boolean
      if (result) {
        if (this.oneProduit.etat == 'sandbox') {
          this.oneProduit.etat = "live";
          this.produitService.launchProduct(this.oneProduit._id, body).subscribe(result => {
            console.log("success", result);
            /**--------------snackbar-------- blue-snackbar dans style.css----- */
            this.snackBar.open("[" + result['titre'] + "]  a été lancé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          });

        } else if (this.oneProduit.etat == 'live') {
          this.oneProduit.etat = "archived";
          this.produitService.archivedProduct(this.oneProduit._id, body).subscribe(result => {
            console.log("success", result);
            /**--------------snackbar-------- blue-snackbar dans style.css----- */
            this.snackBar.open("[" + result['titre'] + "] a été archivé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          });
        } else {
          this.produitService.deleteProduct(this.oneProduit._id).subscribe(result => {
            console.log("success", result);
            this.produits.splice(this.oneProduit, 1);
          });
          /**--------------snackbar-------- blue-snackbar dans style.css----- */
<<<<<<< HEAD
          this.snackBar.open("["+result['titre']+"]  a été lancé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        });
      }      
    } else if (this.oneProduit.etat == 'live') {      
      if(confirm("Voullez-vous archiver le produit "+this.oneProduit.titre+ "?")) {
        this.oneProduit.etat = "archived";
        this.produitService.archivedProduct(this.oneProduit._id, body).subscribe(result => {
          console.log("success", result); 
          /**--------------snackbar-------- blue-snackbar dans style.css----- */
          this.snackBar.open("["+result['titre']+"] a été archivé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        });
      }
    } else {
      if (confirm("Etes-vous sur de vouloir supprimer " + this.oneProduit.titre + "?")) {
        this.produitService.deleteProduct(this.oneProduit._id).subscribe(result => {
          console.log("success", result);           
          this.produits.splice(this.oneProduit, 1);                   
        });
        this.snackBar.open("["+this.oneProduit.titre+"] a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        this.createProduit();
      }    
    }

  }

  deleteOrArchivedProduct() {
    let body = {
      acteur: "rakoto"
    };
    if (this.oneProduit.etat == 'live') {
      if(confirm("Voullez-vous archiver le produit "+this.oneProduit.titre+ "?")) {
        this.oneProduit.etat = "archived";
        this.produitService.archivedProduct(this.oneProduit._id, body).subscribe(result => {
          console.log("success", result);
          this.snackBar.open("["+result['titre']+"] a été archivé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        });
      }
    } else {
      if (confirm("Etes-vous sur de vouloir supprimer " + this.oneProduit.titre + "?")) {
        this.produitService.deleteProduct(this.oneProduit._id).subscribe(result => {
            console.log("success", result);
            this.produits.splice(this.oneProduit, 1);
          });
          this.snackBar.open("["+this.oneProduit.titre+"] a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        this.createProduit();
      }
    }

    console.log(this.oneProduit._id);
=======
          this.snackBar.open("[" + this.oneProduit.titre + "] a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          this.createProduit();
        }
      }
    });
  }

  deleteProduct() {
    const dialogRef = this.dialog.open(this.dialogBox); //ouverture dialog
    dialogRef.afterClosed().subscribe(result => {       //recuperation decision utilisateur:  result= boolean
      if (result) {
        this.produitService.deleteProduct(this.oneProduit._id).subscribe(result => {
          this.produits.splice(this.oneProduit, 1);
        });
        /**--------------snackbar-------- blue-snackbar dans style.css----- */
        this.snackBar.open("[" + this.oneProduit.titre + "] a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        this.createProduit();
      }
    });
>>>>>>> 3aa370e81b2739066e7fb1d3182c9b4a8cbfd810
  }


  changeEtat(event) {

    console.log(this.produitSelected);

    for (let i = 0; i < this.produitSelected.length; i++) {

      const checkElement = document.getElementById(this.produitSelected[i]._id) as HTMLInputElement;
      checkElement.checked = false;
    }

    this.produitSelected = [];

    this.state_to_change = event.target.value;
  }

  getProduit() {
    console.log("Le parametre de recuperation", this.paramGetCustomized);
    // this.produits = this.produitService.getProduit();
    // this.oneProduit = this.produits[0];
    // console.log(this.oneProduit);

    this.produitService.getAllProduits(this.paramGetCustomized).subscribe(resultat => {
      console.log("resultat", resultat);
      this.produits = resultat['produits'];
      this.oneProduit = this.produits[0];
    });




  }

  createProduit() {
    this.oneProduit = {
      _id: "",
      categorie: 21212124545,
      etat: "sandbox",
      description: "",
      vu: 0,
      garantie: "0",
      provenance: "",
      marque: "",
      detail_fabrication: {
        date_sortie: "",
        numero_model: "",
      },
      detail_physique: {
        largeur: "",
        longueur: "",
        poids: "",
        couleur: "",
        taille: ""
      },
      favoris: [],
      images: [],
      prix: {
        prix_normal: "",
        prix_promotion: ""
      },
      quantite: "",
      titre: "",
      vote: [],
      index: ""
    };

    //********************************************/

    this.createType = true;


    //***************************************** */

  }

  cancelCreate() {
    this.createType = false;
    this.oneProduit = this.produits[0];
  }


  getOneProduit(oneProduit, i) {
    this.oneProduit = oneProduit;
    this.oneProduit['index'] = i;
    this.createType = false;
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
    const checkIdP = obj => obj._id === p._id;
    let result: boolean = this.produitSelected.some(checkIdP);
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
  selectUser(u) {
    /**check si produit existe dans le produitSelected */
    const checkIdProduit = obj => obj._id === u._id;
    let result: boolean = this.produitSelected.some(checkIdProduit);
    if (result == true) {
      /**enlever du produit Selected si l'utilisateur existe deja  */
      this.produitSelected = this.produitSelected.filter(function (item) {
        return item._id !== u._id;
      });
    } else {
      /**ajouter dans le produitSelected si le produit n'y est encore pas */
      this.produitSelected.push(u);
    }
  }

  removeFromproduitSelected(u) {
    //***supprimer du tableau */
    this.produitSelected = this.produitSelected.filter(function (item) {
      return item._id !== u._id;
    });
    //**** dechecker le users */  
    const checkElement = document.getElementById(u._id) as HTMLInputElement;
    checkElement.checked = false;

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

  popupImageProduits(): void {
    this.dialog.open(this.imageProduit, {
      width: '400px',
    });
  }

  showDetailstatistic(stat, title) {
    this.showDetailListStat = true;
    this.Transparent_overlay = true;
    this.listDetailToShow = stat;
    this.titleDetailListStat = title;

    this.spinner.show(this.spinner_list_user);//start loader
    setTimeout(() => {
      this.spinner.hide(this.spinner_list_user);//stop loader
    }, 1000);

  }

  hideAllPopup() {

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
      console.log("Le parametre de recuperation", this.paramGetCustomized);

      this.loadMore = true;
      this.spinner.show(this.spinner_loadMore);
      this.scrollSpace = 20;

      setTimeout(() => {
        this.spinner.hide(this.spinner_loadMore);
        // this.loadMore = false;
        this.scrollSpace = 0;
        let newProduits = [];

        this.produitService.getAllProduits(this.paramGetCustomized).subscribe(resultat => {
          console.log("resultat", resultat);
          newProduits = resultat['produits'];
          // this.oneProduit = this.produits[0];
          //concatenation produit a newProduit
          this.produits = this.produits.concat(newProduits);
          console.log("aprs concat", this.produits);

        });

      }, 1000);

    }

  }
  changefiltre(e) {
    let status = e.target.value
    this.produits = this.produitService.getProduit();
    if (status != "none") {
      this.produits = this.produits.filter((value) => value.etat == status);

    }
  }

  //upload file//
  uploadFile(files) {
    let images: File = files.item(0);

    const formData: FormData = new FormData();
    formData.append('images', images, images.name);

    this.produitService.ajouterImage(formData, this.oneProduit._id).subscribe(data => {
      console.log("uploaded with succes", data);
    }, error => {
      console.log(error);
    });
  }



}
