import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = 'http://localhost:3000/users';  // URL to web api

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
    },
  {
      _id: "5ee22783653cc3195007c497",
      avatar: "defaultpic.png",
      username: "rakoto",
      password: "$2b$10$yyw/TG1bIhFroeRACrwO8OoSfyvvmu8eBMtZniuXPWkrzt9XNuxJS",
      nom: "RAKOTOZAFY",
      prenom: "Tokinirina",
      adresse: "Fianarantsoa",
     tel: "324165799",
     email: "rakoto@gmail.com",
    },
  {
      _id: "5ee227af653cc3195007c498",
      avatar: "defaultpic.png",
      username: "faniri",
      password: "$2b$10$nlVFIFCF7rWcqrJPNviJQ.u9BwnfAA2c4kHQKzFlpxN7TXQZXm2ha",
      nom: "FANIRINIRINA",
      prenom: "Sarobidy",
      adresse: "Antananarivo",
     tel: "3465742",
     email: "faniri@gmail.com",
    },
  {
      _id: "5ee22837653cc3195007c499",
      avatar: "defaultpic.png",
      username: "tovo",
      password: "$2b$10$TQAL3h7MaCA0YlGPa..Plu0oBTcVm7Hziy1.E9rQggBa0/FN2bT2m",
      nom: "TOVOLALAINA",
      prenom: "Narindra",
      adresse: "Antananarivo",
     tel: "321135791",
     email: "tovo@gmail.com",
    },
  {
      _id: "5ee22870653cc3195007c49a",
      avatar: "defaultpic.png",
      username: "manitra",
      password: "$2b$10$MSMOM0Fc0ebkwhzFfzf90Ob4hyF2.clxlOD4dqHB2jgiC59q7/WXm",
      nom: "FELANIRINA",
      prenom: "Manitra",
      adresse: "Antananarivo",
     tel: "3275961",
     email: "manitra@yahoo.com",
    },
  {
      _id: "5ee228ae653cc3195007c49b",
      avatar: "defaultpic.png",
      username: "tajona",
      password: "$2b$10$l8RD4f/sUeg7WppFB10HFu7G1FjRYE9ZmgUvGtQqN3JSnUeGUtDdq",
      nom: "TANJONASOA",
      prenom: "Sarobidy",
      adresse: "Antananarivo",
     tel: "347196384",
     email: "tajona@yahoo.fr",
    }

  ]



  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.userUrl)
  }

  getUser(id: number): Observable<Users> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<Users>(url);
  }

  addUsers(user: Users): Observable<Users> {
    return this.http.post<Users>(this.userUrl, user, httpOptions);
  }

  deleteUser(id: number): Observable<Users> {
    // const id = typeof user === 'number' ? user : user.id;
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<Users>(url, httpOptions);
  }

  updateUser(user: Users): Observable<any> {
    const url = `${this.userUrl}/${user._id}`;
    return this.http.put(url, user, httpOptions);
  }


  getListeUser(){
    return this.listeUsers;
  }
}
