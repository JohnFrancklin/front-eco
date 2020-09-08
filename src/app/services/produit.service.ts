import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  private endPoint = 'http://localhost:3000/produits';

  produits= [
    {
      _id: "1",
      titre: "Simsong One mobile",
      description: "la plus grande marque de telephone actuellement",
      categorie: 21212124545, //objectID
      quantite: 10,
      garantie: 15,
      etat: "sandbox",
      marque : "samsung",
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
      favoris:[
        2154545454,
        2154545454,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545,
        21245454545
      ]
    }



  ]
  constructor (private http: HttpClient) {  }

  getProduit(){
    return this.produits;
  }

  getAllProduits(){
    return this.http.get<any[]>(this.endPoint,httpOptions);
  }


  createProduct(createProduct) {
    return this.http.post<any[]>(this.endPoint,createProduct,httpOptions);
   }

  updatePoduct(putProduct, id) {
    return this.http.put<any[]>(this.endPoint+"/"+id,putProduct, httpOptions);
  }

  deleteProduct(id) {
    return this.http.delete<any[]>(this.endPoint+"/"+id, {responseType:'text' as 'json'});
  }

  launchProduct(etat, id) {
    return this.http.put<any[]>(this.endPoint+"/updated/lancement/"+id, etat, httpOptions);
  }

  archivedProduct(etat, id) {
    return this.http.put<any[]>(this.endPoint+"/updated/archive/"+id, etat, httpOptions);
  }

  
}
