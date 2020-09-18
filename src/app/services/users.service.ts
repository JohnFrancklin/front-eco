import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Users } from '../interfaces/users';
import { LoginComponent } from '../components/login/login.component';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const endPoint = environment.api+"users";


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  listeUsers = [
    {
      _id: "5ee22752653cc3195007c496",
      avatar: "defaultpic.png",
      username: "nomena",
      password: "$2b$10$.dCplvBIKAhf/5OE9gFqFeLwY1jWG2rlcfVPMKtnBSnGeKsSlPWMu",
      nom: "Nomenjanahary",
      prenom: "Lalaina",
      adresse: "Antananarivo",
      tel: "347812369",
      email: "nomena@gmail.com",
      role: "Abonné",
      pays:"Madagascar",
      ville: "Antananarivo",
      dateinscription: "",
    },
    {
      _id: "5ee22752653cc3195007c496",
      avatar: "defaultpic.png",
      username: "nomena",
      password: "$2b$10$.dCplvBIKAhf/5OE9gFqFeLwY1jWG2rlcfVPMKtnBSnGeKsSlPWMu",
      nom: "Nomenjanahary",
      prenom: "Sarobidy",
      adresse: "Antananarivo",
      tel: "347812369",
      email: "nomena@gmail.com",
      role: "Abonné",
      pays:"Madagascar",
      ville: "Antananarivo",
      dateinscription: "",
    },

    

  ]


  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(endPoint)
  }

  getUser(id: number): Observable<Users> {
    return this.http.get<Users>(endPoint+"/"+id);
  }

  // addUsers(user: Users): Observable<Users> {
  //   return this.http.post<Users>(endPoint, user, httpOptions);
  // }

  addUsers(addUsers) {
    return this.http.post<any[]>(endPoint,addUsers,httpOptions);
   }

  // http://localhost:3000/auth/login
  login(login) {
    return this.http.post<any>(environment.api+"auth/login", login, httpOptions);
  }

  deleteUser(id: number): Observable<Users> {
    // const id = typeof user === 'number' ? user : user.id;
    return this.http.delete<Users>(endPoint+"/"+id, httpOptions);
  }

  updateUser(user: Users): Observable<any> {
    return this.http.put(endPoint+"/"+user._id, user, httpOptions);
  }

  getListeUser() {
    return this.listeUsers;
  }

}
