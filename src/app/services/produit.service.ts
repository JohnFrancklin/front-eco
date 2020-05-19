import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  produits= [
    {
      _id: "1",
      title: "Simsong One mobile",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Madagascar",
      vu: 150,
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
        couleur: "rouge",
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
      title: "Tele plasma",
      description: "Regarder votre television sous un autre angle :p",
      categorie: 21212124545, //objectID
      quantite: 20,
      garantie: 150,
      provenance : "France",
      vu: 12,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "noir",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1000,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },

    {
      _id: "3",
      title: "Ventilateur rapide",
      description: "Le vent souffle ",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Paris",
      vu: 150,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "blanc",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1200,
        prix_promotion: 600
      },
      favorie:[
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },
    {
      _id: "1",
      title: "Simsong One mobile",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Madagascar",
      vu: 150,
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
        couleur: "rouge",
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
      title: "Tele plasma",
      description: "Regarder votre television sous un autre angle :p",
      categorie: 21212124545, //objectID
      quantite: 20,
      garantie: 150,
      provenance : "France",
      vu: 12,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "noir",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1000,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },

    {
      _id: "3",
      title: "Ventilateur rapide",
      description: "Le vent souffle ",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Paris",
      vu: 150,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "blanc",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1200,
        prix_promotion: 600
      },
      favorie:[
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },{
      _id: "1",
      title: "Simsong One mobile",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Madagascar",
      vu: 150,
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
        couleur: "rouge",
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
      title: "Tele plasma",
      description: "Regarder votre television sous un autre angle :p",
      categorie: 21212124545, //objectID
      quantite: 20,
      garantie: 150,
      provenance : "France",
      vu: 12,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "noir",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1000,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },

    {
      _id: "3",
      title: "Ventilateur rapide",
      description: "Le vent souffle ",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Paris",
      vu: 150,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "blanc",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1200,
        prix_promotion: 600
      },
      favorie:[
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },{
      _id: "1",
      title: "Simsong One mobile",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Madagascar",
      vu: 150,
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
        couleur: "rouge",
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
      title: "Tele plasma",
      description: "Regarder votre television sous un autre angle :p",
      categorie: 21212124545, //objectID
      quantite: 20,
      garantie: 150,
      provenance : "France",
      vu: 12,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "noir",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1000,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },

    {
      _id: "3",
      title: "Ventilateur rapide",
      description: "Le vent souffle ",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Paris",
      vu: 150,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "blanc",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1200,
        prix_promotion: 600
      },
      favorie:[
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },{
      _id: "1",
      title: "Simsong One mobile",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Madagascar",
      vu: 150,
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
        couleur: "rouge",
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
      title: "Tele plasma",
      description: "Regarder votre television sous un autre angle :p",
      categorie: 21212124545, //objectID
      quantite: 20,
      garantie: 150,
      provenance : "France",
      vu: 12,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "noir",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1000,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },

    {
      _id: "3",
      title: "Ventilateur rapide",
      description: "Le vent souffle ",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Paris",
      vu: 150,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "blanc",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1200,
        prix_promotion: 600
      },
      favorie:[
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },{
      _id: "1",
      title: "Simsong One mobile",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Madagascar",
      vu: 150,
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
        couleur: "rouge",
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
      title: "Tele plasma",
      description: "Regarder votre television sous un autre angle :p",
      categorie: 21212124545, //objectID
      quantite: 20,
      garantie: 150,
      provenance : "France",
      vu: 12,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "noir",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1000,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },

    {
      _id: "3",
      title: "Ventilateur rapide",
      description: "Le vent souffle ",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Paris",
      vu: 150,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "blanc",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1200,
        prix_promotion: 600
      },
      favorie:[
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },{
      _id: "1",
      title: "Simsong One mobile",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      provenance : "Madagascar",
      vu: 150,
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
        couleur: "rouge",
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
      title: "Tele plasma",
      description: "Regarder votre television sous un autre angle :p",
      categorie: 21212124545, //objectID
      quantite: 20,
      garantie: 150,
      provenance : "France",
      vu: 12,
      vote: [
          13121345612,
          21245454545,
          21245454545,
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
        couleur: "noir",
        taille: "m" // m,x,
      },
      prix: {
        prix: 1000,
        prix_promotion: 500
      },
      favorie:[
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    },





    




  ]
  constructor() { }

  getProduit(){
    return this.produits;
  }

  
}
