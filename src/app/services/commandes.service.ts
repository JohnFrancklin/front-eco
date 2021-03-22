import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {


  commandes = [
    {
      _id: 121214545454,
      numero_commande: 1254,
      user: {
        nom: "rakoto",
        prenom: "lita",
        tel: "03565645778",
        email: "rakoto@gmail.com",
        pays: "Madagascar",
        ville: "Tana",
        codePostal: 101,
        adresse: "Lot 1524 67Ha",
        dateInscription: "12/23/2020"
      },
      client: "Rakoto rabe maria",
      adresse: "Antananarivo, Anjanahary 2n",
      codePostal: 101,
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: Date.now(),
      etat: "accepted",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: Date.now()
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000,
        codePromo: "RAKOTO220"
      },
      commandes: [
        {
          id_produit: {
            categorie: {
              nom: "mobile"
            },
            images: ["image1.png", "image2.png", "image3.png"],
          },
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: {
            categorie: {
              nom: "mobile"
            },
            images: ["image1.png", "image2.png", "image3.png"],
          },
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    }
  ]


  constructor() { }


  getCommandes() {
    return this.commandes;
  }


}
