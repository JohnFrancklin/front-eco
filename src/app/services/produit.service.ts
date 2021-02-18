import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + document.cookie
  })
}

const endPoint = environment.api+"produits";
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  

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

  // getAllProduits(){
  //   return this.http.get<any[]>(this.endPoint,httpOptions);
  // }

  getAllProduits(page){
    return this.http.get<any[]>(endPoint+"/getProduitsCustomised/"+page,httpOptions);
  }

  createProduct(createProduct) {
    return this.http.post<any[]>(endPoint,createProduct,httpOptions);
   }

  updatePoduct(putProduct, id) {
    return this.http.put<any[]>(endPoint+"/"+id,putProduct, httpOptions);
  }

  deleteProduct(id) {
    return this.http.delete<any[]>(endPoint+"/"+id, httpOptions);
  }

  launchProduct(id, lanceur) {
    return this.http.put<any[]>(endPoint+"/update/lancement/"+id, lanceur, httpOptions);
  }

  archivedProduct(id, lanceur) {
    return this.http.put<any[]>(endPoint+"/update/archive/"+id, lanceur, httpOptions);
  }


ajouterImage(formData, id) {
  return this.http.put<any[]>(endPoint+"/update/imagesAdd/"+id, formData, {responseType:'json'}); //pas de httpOptions
}

supprimerImage(body, id) {
  return this.http.put<any[]>(endPoint+"/update/imagesRemove/"+id, body, {responseType:'json'}); //pas de httpOptions
}

dupliquerMultiple(body){
  return this.http.post<any[]>(endPoint+"/duplicate",body,httpOptions);
}

launchMultiple(body) {
  return this.http.put<any[]>(endPoint+"/update/multipleLancement/", body, httpOptions);
}

archivedMultiple(body) {
  return this.http.put<any[]>(endPoint+"/update/multipleArchive/", body, httpOptions);
}

deleteMultiple(id) {
  return this.http.delete<any[]>(endPoint+"/delete/deleteMultipleProduits/", id);
}

}
