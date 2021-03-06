import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interfaces/users';
import {FormsModule, NgForm} from "@angular/forms";
import Swal from 'sweetalert2'
//declare var Swal: any;

// rxjs
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
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
  users: Users[];

  searchText;
  searchInput;

  //api
  arrayUser: any = [];

  // service
  listeUsers: any;
  usersDetail = new Users();
  usersSelected = [];

  // all nom user
  nomUsers: any = [];
  // filtre user nom
  userliste: any;
  clickedItem: string;


  constructor(private spinner: NgxSpinnerService, private usersService: UsersService, ) { }

  ngOnInit(): void {

    this.getListeUser();
    /**************SPINNER TEST ************* */
    this.spinner.show(this.spinner_list_utilisateurs);//start loader
    setTimeout(() => {
      this.spinner.hide(this.spinner_list_utilisateurs);//stop loader
    }, 500);
    /************************************** */
    this.searchInput="";
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
        let newUser = this.usersService.getListeUser();
        //concatenation user a newUser
        this.listeUsers = this.listeUsers.concat(newUser);
      }, 2000);

    }

  }

  getExistAll() {
    return this.usersService.getUsers().subscribe(
      users => {
        this.arrayUser = []
        this.allListeUser = users;
        for (let index = 0; index < this.allListeUser.users.length; index++) {
          this.arrayUser.push(this.allListeUser.users[index])
        }
        //this.usersDetail = this.arrayUser[0];
        // console.log('liste',  this.arrayUser)
      }
    )
  }



  /*getOneUser(iduser){
   
    return this.usersService.getUser(iduser).subscribe(
      users => {
        this.usersDetail = users
        this.createType = false;
      }
    )
  }*/

  supprimer() {
    Swal.fire({
      title: 'Vous voulez bien supprimer l\'utilisateur ' + this.usersDetail.username + '?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {

        this.usersService.deleteUser(this.usersDetail._id)
          .subscribe(result => this.getExistAll()

          );
        Swal.fire(
          'L\'utilisateur  ' + this.usersDetail.username + ' a été supprimé avec succès',
        )
      }
    })
  }

  modifier(): void {
    Swal.fire({
      title: 'Vous voulez bien modifier l\'utilisateur ' + this.usersDetail.username + '?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {

        this.usersService.updateUser(this.usersDetail)
          .subscribe(result => this.getExistAll()

          );
        Swal.fire(
          'L\'utilisateur  ' + this.usersDetail.username + ' a été modifié avec succès',
        )
      }
    })

  }

  createUser() {
    this.usersDetail = {
      _id: 0,
      avatar: "",
      username: "",
      password: "",
      nom: "",
      prenom: "",
      adresse: "",
      tel: "",
      email: "",
      role: "",
      pays: "",
      ville: "",
      sexe: "",
      codePostal: "",
      dateinscription: "",
      confirmPassword: "",
    };
    this.createType = true;
  }

  cancelCreate() {
    this.createType = false;
    this.usersDetail = this.listeUsers[0];
  }

  /* Detail User  */

  getListeUser() {
    console.log("Le parametre de recuperation", this.paramGetCustomized);

    this.listeUsers = this.usersService.getListeUser();

    this.usersService.getUsers().subscribe(resultat => {
      console.log("resultat", resultat);
      this.listeUsers = resultat['users'];
      // this.oneProduit = this.produits[0];
      this.usersDetail = this.listeUsers[0];
    });



    // store all nom user
    for (let index = 0; index < this.listeUsers.length; index++) {
      this.nomUsers.push(this.listeUsers[index].nom +" "+this.listeUsers[index].prenom)
    }
    
  }

  selectUser(u) {
    /**check si id_user existe dans le usersSelected */
    const checkIdUser = obj => obj._id === u._id;
    let result: boolean = this.usersSelected.some(checkIdUser);
    if (result == true) {
      /**enlever du usersSelected si l'utilisateur existe deja  */
      this.usersSelected = this.usersSelected.filter(function (item) {
        return item._id !== u._id;
      });
    } else {
      /**ajouter dans le usersSelected si le produit n'y est encore pas */
      this.usersSelected.push(u);
    }
  }

  removeFromUsersSelected(u) {
    //***supprimer du tableau */
    this.usersSelected = this.usersSelected.filter(function (item) {
      return item._id !== u._id;
    });
    //**** dechecker le users */  
    const checkElement = document.getElementById(u._id) as HTMLInputElement;
    checkElement.checked = false;

  }

  setCheckedUser() {
    let idChecked = [];
    for (let i = 0; i < this.listeUsers.length; i++) {
      for (let j = 0; j < this.usersSelected.length; j++) {
        if (this.listeUsers[i]._id === this.usersSelected[j]._id) {
          idChecked.push(this.listeUsers[i]._id);
        }
      }
    } //on peut fusionner les boucles, mais ca crée un bug apres
    for (let i = 0; i < idChecked.length; i++) {
      const checkElement = document.getElementById(idChecked[i]) as HTMLInputElement;
      checkElement.checked = true;
    }
  }

  selectOneUser(user) {
    this.usersDetail = user;
    this.createType = false;
  }

  changefiltre(e) {
    let status = e.target.value
    this.listeUsers = this.usersService.getListeUser();
    if (status != "none") {
      this.listeUsers = this.listeUsers.filter((value) => value.role == status);
    }
  }


  filterByValue(array, value) {
    return array.filter((data) => JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  getUserFiltre(term: string) {

    if (term === '') {
      return of([]);
    }
    this.userliste = this.filterByValue(this.nomUsers, term)

    return Array.of(this.userliste)
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term =>
        this.getUserFiltre(term)
      ),
    )

    
    searchUtilisateur(){
      this.listeUsers = this.usersService.getListeUser();
      const words = this.searchInput.split(' ');
      const Key1 = words[0]
      const Key2 = words[1]

      if(this.searchInput === ""){
        this.listeUsers = this.usersService.getListeUser();
      }
      else if (Key2 == undefined){
        this.listeUsers = this.listeUsers.filter((value) => value.nom.toLowerCase() == Key1.toLowerCase() || value.prenom.toLowerCase() == Key1.toLowerCase()  );
      }else{
        this.listeUsers = this.listeUsers.filter((value) => value.nom.toLowerCase() == Key1.toLowerCase() && value.prenom.toLowerCase() == Key2.toLowerCase() 
        
        // prenom et nom
        || value.nom.toLowerCase() == Key2.toLowerCase() && value.prenom.toLowerCase() == Key1.toLowerCase() 
        );
      }
    }
    
    selectedItem(item){
      this.clickedItem = item.item;
      this.listeUsers = this.usersService.getListeUser();

      const words = this.clickedItem.split(' ');
      const userNom = words[0]
      const userPrenom = words[1]
      
      this.listeUsers = this.listeUsers.filter((value) => value.nom.toLowerCase() == userNom.toLowerCase() && value.prenom.toLowerCase() == userPrenom.toLowerCase()  );
    }


    createUserMethode(form: NgForm) {
      console.log(form.value);
  }


}


