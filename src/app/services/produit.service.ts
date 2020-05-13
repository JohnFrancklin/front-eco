import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  produits= [
    {
      _id: "1",
      title: "Simsong One mobile phone",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      vote: [
          13121345612,
          21245454545,
          21245454545,
          21245454545
      ],
      
      images: [
        "image1.png", "image2.png", "image3.png"
      ],
      detail_fabrication: {
        numero_model: "A123X",
        date_sortie: "2 jan 2020"
      },
      detail_physique: {
        poids: 350,
        longueur: 10,
        largueur: 10,
        taille: "m" // m,x,
      },
      prix: {
        prix: 1000,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },

    {
      _id: "2",
      title: "Ordinateur",
      description: "MAC BOOK",
      categorie: 21212124545, //objectID
      quantite: 15,
      vote: [

      ],
      
      images: [
        "image1.png", "image2.png"
      ],
      detail_fabrication: {
        numero_model: "A123X",
        date_sortie: "2 jan 2020"
      },
      detail_physique: {
        poids: 350,
        longueur: 10,
        largueur: 10,
        taille: "m" // m,x,
      },
      prix: {
        prix: 500,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },


    {
      _id: "3",
      title: "BMW",
      description: "VOITURE",
      categorie: 21212124545, //objectID
      quantite: 5,
      vote: [
          123456789,
          13121345612,
          21245454545
      ],
      
      images: [
        "image1.png"
      ],
      detail_fabrication: {
        numero_model: "A123X",
        date_sortie: "2 jan 2020"
      },
      detail_physique: {
        poids: 350,
        longueur: 10,
        largueur: 10,
        taille: "m" // m,x,
      },
      prix: {
        prix: 1500,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        2154545454
      ]
    },
    {
      _id: "4",
      title: "Montre home quartz",
      description: "la nouvelle generation de montre avec toute sa splendeur",
      categorie: 21212124545, //objectID
      quantite: 17,
      vote: [
          123456789,
          13121345612,
          21245454545
      ],
      
      images: [
        "image1.png", "image2.png"
      ],
      detail_fabrication: {
        numero_model: "1542DFD",
        date_sortie: "5 Mars 2020"
      },
      detail_physique: {
        poids: 50,
        longueur: 20,
        largueur: 15,
        taille: "m" // m,x,
      },
      prix: {
        prix: 2000,
        prix_promotion: 1500
      },
      favorie:[
        2154545454,
        2154545454
      ]
    },

    {
      _id: "5",
      title: "Ballon de basket",
      description: "Ballon en gomme basket ",
      categorie: 21212124545, //objectID
      quantite: 17,
      vote: [
          123456789,
          13121345612,
          21245454545
      ],
      
      images: [
        "image1.png", "image2.png"
      ],
      detail_fabrication: {
        numero_model: "1542DFD",
        date_sortie: "5 Mars 2020"
      },
      detail_physique: {
        poids: 50,
        longueur: 20,
        largueur: 15,
        taille: "m" // m,x,
      },
      prix: {
        prix: 2000,
        prix_promotion: 1500
      },
      favorie:[
        2154545454,
        2154545454
      ]
    },











  ]
  constructor() { }

  getProduit(){
    return this.produits;
  }

  
}
