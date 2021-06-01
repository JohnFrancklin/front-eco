import { Component, OnInit, ViewChild, TemplateRef, HostListener } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogContainer } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar } from '@angular/material/snack-bar';


import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatMenuTrigger } from '@angular/material/menu';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: any;
  // oneProduit: any;
  produitSelected = [];
  objetDuplicate = {};
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

  categorie = {
    _id: "",
    nom: "",
    description: ""
  };

  oneCategorie: any;

  totalProduits: any;


  showFilter: boolean = false;
  showDetailListStat: boolean = false;
  showCategorieCreate: boolean = false;
  showCategorieEdit: boolean  = false;
  listDetailToShow: string;  // vote ou favoris ou vu ou commande
  titleDetailListStat: string;
  Transparent_overlay: boolean = false;

  createType: boolean = false;
  loadMore: boolean = false;
  scrollSpace = 0;  // espace vide scroll

  paramGetCustomized = 1;
  state_to_change = "";

  indexProduit: any;

  //--------Variables pour spinner-------//spinner_loadMore
  spinner_list_Produit = "spinner_list_Produit";
  spinner_list_user = "spinner_list_user";
  spinner_loadMore = "spinner_loadMore";

  spinner_type = "line-scale";
  spinner_size = "10px";
  spinner_background = "rgba(100,100,100,0.1)"
  //------------------------------------//

  isEtireListe: boolean = false;
  allProduitsSelected = [];
  idProduitSelected = [];

  title = "Smartphone G10 2e";

  @ViewChild('imageProduit') imageProduit: TemplateRef<any>;
  @ViewChild('dialogBox') dialogBox: TemplateRef<any>;
  @ViewChild('categorieBox') categorieBox: TemplateRef<any>;
  @ViewChild('categorieBoxEdit') categorieBoxEdit: TemplateRef<any>;
  @ViewChild('categorieBoxDelete') categorieBoxDelete: TemplateRef<any>;
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };
  indexImage: any;
  isProduitElement: boolean = true;

  allCategorie: any;
  isEdited: boolean = false;
  index:any;


  constructor(
    private produitService: ProduitService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getProduit();

    /**************SPINNER TEST ************* */
    this.spinner.show(this.spinner_list_Produit);//start loader
    setTimeout(() => {
      this.spinner.hide(this.spinner_list_Produit);//stop loader
    }, 500);
    /************************************** */

    this.getCategorie();
  }


  createProduct() {

    // console.log("You entered: ", event.target.value);

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
      etat: 'sandbox',
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
      productObject["categorie"] = "5f0ff8cee892a5408c1aae39";
      productObject["acteur"] = "rakoto";
      const dialogRef = this.dialog.open(this.dialogBox); //ouverture dialog
      dialogRef.afterClosed().subscribe(result => {       //recuperation decision utilisateur:  result= boolean
        if (result) {
          this.produitService.createProduct(productObject).subscribe(result => {
            if (result['code'] == "4000") {
              let produit = result['value'][0];
              this.snackBar.open("[" + produit['titre'] + "] a été ajouté avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
              this.produits.push(produit);
            } else if (result['code'] == "4002") {
              console.log("données manquant")
            } else if (result['code'] == "4003") {
              console.log("Probleme de connexion, session expiré");
            }

          });
          // console.log(productObject);
        }
      });

    } else {
      console.log("champ encore vide");
    }
  }

  copierProduit() {
    this.snackBar.open("Copier", '', { duration: 250, verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['copieSnackBar'] });
    this.objetDuplicate = {
      titre: this.oneProduit.titre + "_copy",
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
      etat: 'sandbox',
      categorie: "5f0ff8cee892a5408c1aae39",
      acteur: "rakoto"
    }
  }

  collerProduit() {
    if (Object.keys(this.objetDuplicate).length != 0) { //si une clé existe 
      this.produitService.createProduct(this.objetDuplicate).subscribe(result => {
        if (result['code'] == "4000") {
          let produit = result['value'][0];
          this.snackBar.open("[" + produit['titre'] + "] a été copié avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          this.produits.splice(this.indexProduit + 1, 0, produit);
        } else if (result['code'] == "4002") {
          console.log("données manquant")
        } else if (result['code'] == "4003") {
          console.log("Probleme de connexion, session expiré");
        }

      });
    }
  }


  dupliquerProduit() {
    let body = {
      id_produits: [this.oneProduit._id],
      acteur: "rakoto"
    }
    this.produitService.dupliquerMultiple(body).subscribe(result => {
      if (result['code'] == "4000") {
        let produit = result['value'][0];
        this.snackBar.open("Produit a été dupliqué avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        this.produits.splice(this.indexProduit + 1, 0, produit);
      } else if (result['code'] == "4002") {
        console.log("données manquant")
      } else if (result['code'] == "4003") {
        console.log("Probleme de connexion, session expiré");
      }
    });
  }

  dupliquerMultiple() {
    let body = {
      id_produits: this.idProduitSelected,
      acteur: "rakoto"
    }
    this.produitService.dupliquerMultiple(body).subscribe(result => {
      if (result['code'] == "4000") {
        this.snackBar.open("Produit a été dupliqué avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        for (let i = 0; i < result['value'].length; i++) {
          this.produits.push(result['value'][i]);
        }
      } else if (result['code'] == "4002") {
        console.log("données manquant")
      } else if (result['code'] == "4003") {
        console.log("Probleme de connexion, session expiré");
      }

    });
  }

  editProduit() { // dplacer le focus sur title
    event.preventDefault();
    if (this.oneProduit.etat == 'sandbox') {
      document.getElementById("titre").focus();
    }
  }

  updateProduct() {
    this.oneProduit.etat = 'updating';
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
      etat: 'sandbox',
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
      const dialogRef = this.dialog.open(this.dialogBox); //ouverture dialog
      dialogRef.afterClosed().subscribe(result => {       //recuperation decision utilisateur:  result= boolean
        if (result) {
          this.oneProduit.etat = 'sandbox';
          document.getElementById("one_" + this.produits[this.indexProduit]._id).focus();
          this.produitService.updatePoduct(productObject, this.oneProduit._id).subscribe(result => {
            this.snackBar.open("[" + result['titre'] + "] a été modifié avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          });
        } else {
          this.oneProduit.etat = 'sandbox';
        }
      });
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
            this.produits.splice(this.indexProduit, 1);
          });
          /**--------------snackbar-------- blue-snackbar dans style.css----- */
          this.snackBar.open("[" + this.oneProduit.titre + "] a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });

          if (this.indexProduit != 0) {
            this.oneProduit = this.produits[this.indexProduit - 1];
            document.getElementById("one_" + this.produits[this.indexProduit - 1]._id).focus();
          } else {
            if (this.produits.length >= 2) {
              this.oneProduit = this.produits[this.indexProduit + 1];
              document.getElementById("one_" + this.produits[this.indexProduit + 1]._id).focus();
            } else {

            }
          }


        }
      }
    });
  }

  launchOrArhiveOrDelete_Multiple() {
    let body = {
      id_produits: this.produitSelected,
      acteur: "rakoto"
    }
    console.log(body);
    const dialogRef = this.dialog.open(this.dialogBox); //ouverture dialog
    dialogRef.afterClosed().subscribe(result => {       //recuperation decision utilisateur:  result= boolean
      if (result) {
        if (this.state_to_change == 'sandbox') {
          for (let i = 0; i < this.produitSelected.length; i++) {
            this.produitSelected[i].etat = "live";
          }
          this.produitService.launchMultiple(body).subscribe(result => {
            console.log("success", result);
            /**--------------snackbar-------- blue-snackbar dans style.css----- */
            this.snackBar.open("[" + result['titre'] + "]  a été lancé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          });

        } else if (this.state_to_change == 'live') {
          // this.oneProduit.etat = "archived";
          for (let i = 0; i < this.produitSelected.length; i++) {
            this.produitSelected[i].etat = "archived";
          }
          this.produitService.archivedMultiple(body).subscribe(result => {
            console.log("success", result);
            /**--------------snackbar-------- blue-snackbar dans style.css----- */
            this.snackBar.open("[" + result['titre'] + "] a été archivé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          });
        }

        else if (this.state_to_change == 'archived') {
          let multipleID = [];
          for (let i = 0; i < this.produitSelected.length; i++) {
            multipleID.push(this.produitSelected[i]._id);
          }
          console.log(multipleID, "coucou");

          let data = {
            id_produits: multipleID
          }
          console.log(data);
          this.produitService.deleteMultiple(data).subscribe(result => {
            console.log("success", result); 

          for(let i = 0; i < this.produitSelected.length; i++) {
            let index = this.produits.findIndex(p => { return p._id == this.produitSelected[i]._id });
            console.log("index = ", index);
            this.produits.splice(index, 1);
          }
          this.totalProduits = multipleID.length;
          console.log("total produits = ", this.totalProduits);
          });
          /**--------------snackbar-------- blue-snackbar dans style.css----- */
          this.snackBar.open("[" + this.totalProduits + "] produits ont été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        }
      }
    });
  }

  deleteOrArchivedProduct() {
    const etatTemp = this.oneProduit.etat;
    if (this.oneProduit.etat == 'sandbox') {
      this.oneProduit.etat = 'deleting';
    }

    let body = {
      acteur: "rakoto"
    };
    const dialogRef = this.dialog.open(this.dialogBox); //ouverture dialog
    dialogRef.afterClosed().subscribe(result => {       //recuperation decision utilisateur:  result= boolean
      if (result) {
        if (this.oneProduit.etat == 'live') {
          this.oneProduit.etat = "archived";
          this.produitService.archivedProduct(this.oneProduit._id, body).subscribe(result => {
            console.log("success", result);
            /**--------------snackbar-------- blue-snackbar dans style.css----- */
            this.snackBar.open("[" + result['titre'] + "] a été archivé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          });
        } else {
          this.produitService.deleteProduct(this.oneProduit._id).subscribe(result => {
            this.produits.splice(this.indexProduit, 1);
          });
          /**--------------snackbar-------- blue-snackbar dans style.css----- */
          this.snackBar.open("[" + this.oneProduit.titre + "] a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          if (this.indexProduit != 0) {
            this.oneProduit = this.produits[this.indexProduit - 1];
            document.getElementById("one_" + this.produits[this.indexProduit - 1]._id).focus();
          } else {
            if (this.produits.length >= 2) {
              this.oneProduit = this.produits[this.indexProduit + 1];
              document.getElementById("one_" + this.produits[this.indexProduit + 1]._id).focus();
            } else {

            }
          }
        }
      } else {
        this.oneProduit.etat = etatTemp;
      }
    });
  }


  deleteProduct() {
    const etatTemp = this.oneProduit.etat;
    this.oneProduit.etat = 'deleting';
    const dialogRef = this.dialog.open(this.dialogBox); //ouverture dialog
    dialogRef.afterClosed().subscribe(result => {       //recuperation decision utilisateur:  result= boolean
      if (result) {
        this.produitService.deleteProduct(this.oneProduit._id).subscribe(result => {
          this.produits.splice(this.indexProduit, 1);
          /**--------------snackbar-------- blue-snackbar dans style.css----- */
          this.snackBar.open("[" + this.oneProduit.titre + "] a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
          if (this.indexProduit != 0) {
            this.oneProduit = this.produits[this.indexProduit - 1];
            document.getElementById("one_" + this.produits[this.indexProduit - 1]._id).focus();
            this.indexProduit = this.indexProduit - 1;
          } else {
            if (this.produits.length >= 2) {
              this.oneProduit = this.produits[this.indexProduit];
              document.getElementById("one_" + this.produits[this.indexProduit]._id).focus();
            } else {
              this.oneProduit = this.produits[this.indexProduit];
              // document.getElementById("one_" + this.produits[this.indexProduit]._id).focus();
            }
          }
        });

      } else {
        this.oneProduit.etat = etatTemp;
      }
    });
  }



  confirmDialog() { }


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
      this.indexProduit = 0;
    });




  }

  createProduit() {
    this.oneProduit = {
      _id: "",
      categorie: 21212124545,
      etat: "create",
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
    this.indexProduit = i;
    this.isProduitElement = true;
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

  afficherCategorieCreate() {
    if (this.showCategorieCreate == false) {
      this.showCategorieCreate = true;
      this.Transparent_overlay = true;
    }
    else {
      this.showCategorieCreate = false;
      this.Transparent_overlay = false;
    }

    this.categorie = {
      _id: "",
      nom: "",
      description: ""
    }
  }




  hideOverlay() {
    this.Transparent_overlay = false;
    this.showFilter = false;
    this.showDetailListStat = false;
    this.showCategorieCreate = false;
    this.showCategorieEdit = false;
  }

  popupImageProduits(index): void {
    this.indexImage = index;
    this.isProduitElement = false;
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
    this.produitService.ajouterImage(formData, this.oneProduit._id).subscribe(result => {

      setTimeout(() => {
        this.oneProduit = result['value'][0];
        this.produits[this.indexProduit].images = result['value'][0].images;
      }, 500);

    }, error => {
      console.log(error);
    });
  }

  supprimerImageProduit(nomImage) {
    this.isProduitElement = false;
    let body = {
      images: [nomImage]
    }
    const dialogRef = this.dialog.open(this.dialogBox); //ouverture dialog
    dialogRef.afterClosed().subscribe(result => {       //recuperation decision utilisateur:  result= boolean
      if (result) {
        this.produitService.supprimerImage(body, this.oneProduit._id).subscribe(result => {
          let indexOfImage = this.oneProduit.images.indexOf(nomImage);
          this.oneProduit.images.splice(indexOfImage, 1);
          this.indexImage = 0;
          this.dialog.closeAll();
          /**--------------snackbar-------- blue-snackbar dans style.css----- */
          this.snackBar.open("l'image selectionnée a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
        }, error => { console.log(error); });
      } else {

      }

      this.isProduitElement = true;
      document.getElementById("one_" + this.produits[this.indexProduit]._id).focus();

    });




  }


  showNextImage() {
    this.indexImage++;
  }
  showPreviewImage() {
    this.indexImage--;
  }


  onRightClick(event, element) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
    return false;
  }

  onClickWithControllPressed(evt: MouseEvent, p, i) {
    if (evt.ctrlKey) { // true si on presse le controlle
      if (!('select' in this.produits[i]) || this.produits[i].select == false) {
        this.produits[i].select = true;
        this.allProduitsSelected.push(this.produits[i]);
        this.idProduitSelected.push(this.produits[i]._id);
      } else {
        this.produits[i].select = false;
        const index = this.allProduitsSelected.indexOf(this.produits[i]);
        if (index > -1) {
          this.allProduitsSelected.splice(index, 1);
        }

      }
    } else {
      this.produits.forEach(p => {
        p.select = false;
      });
      this.allProduitsSelected = [];
    }
    console.log("selecteds", this.allProduitsSelected);

  }

  selectionnerTout(event) {
    event.preventDefault();// evider l'evenement native du navigateur
    this.produitSelected = [];
    for (let i = 0; i < this.produits.length; i++) {
      const checkElement = document.getElementById(this.produits[i]._id) as HTMLInputElement;
      if (this.produits[i].etat == this.state_to_change) {
        checkElement.checked = true;
        this.produitSelected.push(this.produits[i]);
      }
    }
  }

  deselectionnerTout(event) {
    event.preventDefault();// evider l'evenement native du navigateur
    for (let i = 0; i < this.produits.length; i++) {
      const checkElement = document.getElementById(this.produits[i]._id) as HTMLInputElement;
      checkElement.checked = false;
    }
    this.produitSelected = [];
  }

  deplacerDroite() {
    if (this.indexProduit != this.produits.length - 1) {
      this.oneProduit = this.produits[this.indexProduit + 1];
      this.indexProduit++;
      document.getElementById("one_" + this.produits[this.indexProduit]._id).focus();
    }
  }
  deplacerGauche() {
    if (this.indexProduit != 0) {
      this.oneProduit = this.produits[this.indexProduit - 1];
      this.indexProduit--;
      document.getElementById("one_" + this.produits[this.indexProduit]._id).focus();
    }
  }
  deplacerHaut() {
    event.preventDefault();// evider l'evenement native du navigateur
    if (this.indexProduit > 2) {
      this.indexProduit = this.indexProduit - 3;
      this.oneProduit = this.produits[this.indexProduit];
      document.getElementById("one_" + this.produits[this.indexProduit]._id).focus();
    }
  }
  deplacerBas() {
    event.preventDefault();// evider l'evenement native du navigateur
    if (this.indexProduit < this.produits.length - 3) {
      this.indexProduit = this.indexProduit + 3;
      this.oneProduit = this.produits[this.indexProduit];
      document.getElementById("one_" + this.produits[this.indexProduit]._id).focus();
    }
  }
  deplacerCancel() {
    event.preventDefault();// evider l'evenement native du navigateur
    document.getElementById("button_cancel_one").focus();
  }
  deplacerConfirme() {
    event.preventDefault();// evider l'evenement native du navigateur
    document.getElementById("button_confirm_one").focus();
  }

  addCategorie() {
    const cat_object = {
      nom: this.categorie.nom,
      description: this.categorie.description
    }

    let isValid = false;
    let listInputAndTextearea = Object.keys(cat_object);    
    for (let i = 0; i < listInputAndTextearea.length; i++) {
      let element = document.getElementById(listInputAndTextearea[i]) as HTMLInputElement;
      if (element.value == "") {
        element.style.borderColor = "red";
        isValid = true;
      } else {
        element.style.borderColor = "#d5d5d5";
      }
    }

    if(!isValid) {
      const dialogRef = this.dialog.open(this.categorieBox);
      dialogRef.afterClosed().subscribe(data => {  
        if(data) {
          this.produitService.addCategorie(cat_object).subscribe(result => {
            console.log("success", result);
            this.showCategorieCreate = false;
            this.snackBar.open("[" + this.categorie['nom'] + "] a été ajouté avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
            this.allCategorie.push(this.categorie);
          });
        }
        this.getCategorie();
      });
    }
      
  }

  getCategorie() {
    return this.produitService.getCategorie().subscribe(data => {
      this.allCategorie = data["value"][0]; 
      console.log("Liste catégorie", this.allCategorie);
    });
  }
  
  editCategorie(c,i) {
    if (this.showCategorieEdit == false) {
      this.showCategorieEdit = true;
      this.Transparent_overlay = true;
    }
    else {
      this.showCategorieEdit = false;
      this.Transparent_overlay = false;
    }
    this.categorie = c;
    console.log(this.categorie, "categ");
  }

  updateCategorie() {
    const body = {
      nom: this.categorie.nom,
      description: this.categorie.description
    }

    let isValid = false;
    let listInputAndTextearea = Object.keys(body);    
    for (let i = 0; i < listInputAndTextearea.length; i++) {
      let element = document.getElementById(listInputAndTextearea[i]) as HTMLInputElement;
      if (element.value == "") {
        element.style.borderColor = "red";
        isValid = true;
      } else {
        element.style.borderColor = "#d5d5d5";
      }
    }

    if(!isValid) {
      const dialogRef = this.dialog.open(this.categorieBoxEdit);
      dialogRef.afterClosed().subscribe(data => {  
        if(data) {
          this.produitService.updateCategorie(body, this.categorie._id).subscribe(result => {
            console.log("Categorie updated ", result);
            this.showCategorieEdit = false;
            this.snackBar.open("[" + this.categorie['nom'] + "] a été modifié avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
            // this.allCategorie;
            this.getCategorie();
          });
        }
      });
    }
  }

  deleteCategorie(categorie, i) {

    const dialogRef = this.dialog.open(this.categorieBoxDelete);
      dialogRef.afterClosed().subscribe(data => {  
        if(data) {
          this.produitService.deleteCategorie(categorie).subscribe(result => {
            console.log("Categorie deleted ", result);
            this.snackBar.open("[" + this.categorie['nom'] + "] a été supprimé avec success", 'ok', { duration: this.durationSnackBar, panelClass: ['blue-snackbar'] });
            this.allCategorie.splice(i, 1);
          });
        }
      });
  }

  isEditedBtn() {
    console.log("hello");
    this.isEdited = !this.isEdited;
  }

  // Create catégorie
  leaveNom() {
    var nom_categorie = document.getElementById("nom") as HTMLInputElement;
    if (nom_categorie.value == "") { nom_categorie.style.borderColor = "red";
    } else { nom_categorie.style.borderColor = "lightgray";
    }
  }

  enterNom() {
    var nom_categorie = document.getElementById("nom") as HTMLInputElement;
    nom_categorie.style.borderColor = "lightgray";
  }

  enterDescri() {
    var description = document.getElementById("description") as HTMLInputElement;
    if (description.value == "") { description.style.borderColor = "red";
    } else { description.style.borderColor = "lightgray";
    }
  }

  leaveDescri() {
    var description = document.getElementById("description") as HTMLInputElement;
    description.style.borderColor = "lightgray";
  }


  // Update catégorie
  leaveNomEdit() {
    var nom_categorie = document.getElementById("nom") as HTMLInputElement;
    if (nom_categorie.value == "") { nom_categorie.style.borderColor = "red";
    } else { nom_categorie.style.borderColor = "lightgray";
    }
  }

  enterNomEdit() {
    var nom_categorie = document.getElementById("nom") as HTMLInputElement;
    nom_categorie.style.borderColor = "lightgray";
  }

  enterDescriEdit() {
    var description = document.getElementById("description") as HTMLInputElement;
    if (description.value == "") { description.style.borderColor = "red";
    } else { description.style.borderColor = "lightgray";
    }
  }

  leaveDescriEdit() {
    var description = document.getElementById("description") as HTMLInputElement;
    description.style.borderColor = "lightgray";
  }



}
