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

  
  constructor( 
    private http: HttpClient
  ) { }

  getUsers (): Observable<Users[]> {
    return this.http.get<Users[]>(this.userUrl)
  }

  getUser(id: number): Observable<Users> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<Users>(url);
  }

  addUsers (user: Users): Observable<Users> {
    return this.http.post<Users>(this.userUrl, user, httpOptions);
  }

  deleteUser (user: Users | number): Observable<Users> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.userUrl}/${id}`;

    return this.http.delete<Users>(url, httpOptions);
  }

  updateUser (user: Users): Observable<any> {
    return this.http.put(this.userUrl, user, httpOptions);
  }
}
