import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interfaces/users';

import Swal from 'sweetalert2'
//declare var Swal: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  oneAndAll: boolean = true;
  showFilter: boolean = false;
  Transparent_overlay: boolean = false;
  showDetailListStat: boolean = false;
  listDetailToShow: string;  // vote ou favoris ou vu ou commande
  titleDetailListStat: string;
  loadMore: boolean = false;

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

  allListeUser: any = [];
  users : Users[];
  arrayUser: any=[];
  onUser: any=[];

  usersDetail= new Users();

  // Detail User
  OneAdresse =""
  OneAvatar =""
  OneEmail=""
  OneNom=""
  OnePrenom =""
  Onetel=""
  OneUsername =""
  One_id: number;

  message: string;
  submitted = false;


  constructor(private spinner: NgxSpinnerService, private usersService: UsersService,) { }

  ngOnInit(): void {

        /**************SPINNER TEST ************* */
        this.spinner.show(this.spinner_list_utilisateurs);//start loader
        setTimeout(() => {
          this.spinner.hide(this.spinner_list_utilisateurs);//stop loader
        }, 500);
        /************************************** */

        this.getExistAll();
  }


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

  showDetailstatistic(stat, title) {
    this.showDetailListStat = true;
    this.Transparent_overlay = true;
    this.listDetailToShow = stat;
    this.titleDetailListStat = title;

    // this.spinner.show(this.spinner_list_user);//start loader
    setTimeout(() => {
      // this.spinner.hide(this.spinner_list_user);//stop loader
    }, 1000);

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
        // let newProduits = this.produitService.getProduit();
        //concatenation produit a newProduit
        // this.produits = this.produits.concat(newProduits);
        // console.log("aprs concat", this.produits);

      }, 2000);

    }

  }

  // setCheckedProduit() {
  //   let idChecked = [];
  //   for (let i = 0; i < this.produits.length; i++) {
  //     for (let j = 0; j < this.produitSelected.length; j++) {
  //       if (this.produits[i]._id === this.produitSelected[j]._id) {
  //         idChecked.push(this.produits[i]._id);
  //       }
  //     }
  //   } //on peut fusionner les boucles, mais ca crée un bug apres
  //   for (let i = 0; i < idChecked.length; i++) {
  //     const checkElement = document.getElementById(idChecked[i]) as HTMLInputElement;
  //     checkElement.checked = true;
  //   }
  // }

  getExistAll() {
    return this.usersService.getUsers().subscribe(
      users => {
        this.arrayUser = []
        this.allListeUser = users;
        for (let index = 0; index < this.allListeUser.users.length; index++) {
          this.arrayUser.push(this.allListeUser.users[index])
        }
      // console.log('liste',  this.arrayUser)
      }
    )
  }

  getOneUser(iduser){
    return this.usersService.getUser(iduser).subscribe(
      users => {
        this.usersDetail = users
      }
    )
  }

  supprimer(){
    Swal.fire({
      title: 'Vous voulez bien supprimer l\'utilisateur '+ this.usersDetail.username +'?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {

        this.usersService.deleteUser(this.usersDetail._id)
        .subscribe(result =>  this.getExistAll()

        );
        Swal.fire(
          'L\'utilisateur  '+ this.usersDetail.username +' a été supprimé avec succès',
        )
      }
    })
  }

  modifier(): void {
    Swal.fire({
      title: 'Vous voulez bien modifier l\'utilisateur '+ this.usersDetail.username +'?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {

        this.usersService.updateUser(this.usersDetail)
        .subscribe(result =>  this.getExistAll()

        );
        Swal.fire(
          'L\'utilisateur  '+ this.usersDetail.username +' a été modifié avec succès',
        )
      }
    })
     
  }

}
