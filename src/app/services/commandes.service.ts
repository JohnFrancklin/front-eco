import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {


  commandes = [
    {
      _id: 12,
      numero_commande: 1,
      id_user: 1212,
      client: "Maxwell",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-04-2020",
      etat: "refused",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 13,
      numero_commande: 1254,
      id_user: 1212,
      client: "Rakoto rabe maria",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-03-2020",
      etat: "accepted",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 14,
      numero_commande: 1,
      id_user: 1212,
      client: "Maxwell",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-04-2020",
      etat: "refused",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 15,
      numero_commande: 1254,
      id_user: 1212,
      client: "Rakoto rabe maria",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-03-2020",
      etat: "accepted",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 16,
      numero_commande: 1,
      id_user: 1212,
      client: "Maxwell",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-04-2020",
      etat: "refused",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 17,
      numero_commande: 1254,
      id_user: 1212,
      client: "Rakoto rabe maria",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-03-2020",
      etat: "accepted",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 18,
      numero_commande: 1,
      id_user: 1212,
      client: "Maxwell",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-04-2020",
      etat: "refused",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 19,
      numero_commande: 1254,
      id_user: 1212,
      client: "Rakoto rabe maria",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-03-2020",
      etat: "accepted",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 20,
      numero_commande: 1,
      id_user: 1212,
      client: "Maxwell",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-04-2020",
      etat: "refused",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 21,
      numero_commande: 1254,
      id_user: 1212,
      client: "Rakoto rabe maria",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-03-2020",
      etat: "accepted",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 22,
      numero_commande: 1,
      id_user: 1212,
      client: "Maxwell",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-04-2020",
      etat: "refused",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 23,
      numero_commande: 1254,
      id_user: 1212,
      client: "Rakoto rabe maria",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-03-2020",
      etat: "accepted",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 24,
      numero_commande: 1,
      id_user: 1212,
      client: "Maxwell",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-04-2020",
      etat: "refused",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
          title: "casquette",
          quantite: 2,
          prix_unitaire: 1214,
          currency: "ar"
        }
      ]
    },
    {
      _id: 25,
      numero_commande: 1254,
      id_user: 1212,
      client: "Rakoto rabe maria",
      addresse: "Antananarivo, Anjanahary 2n",
      note_delivrance: "Envoyé a Mr rakoto pour son anniversaire",
      date_creation: "12-03-2020",
      etat: "accepted",
      tracage: {
        email: "rakoto@gmail.com",
        tel: "034264545454",
        estimation_delivrance: "2012-05-17T08:14:15.656Z"
      },
      payment: {
        method: "visa",
        transaction_id: "2312213312XXXTD",
        amount: 152000
      },
      commandes: [
        {
          id_produit: 1235454,
          title: "chaussure",
          quantite: 2,
          prix_unitaire: 15000,
          currency: "ar"
        },
        {
          id_produit: 1235454,
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
