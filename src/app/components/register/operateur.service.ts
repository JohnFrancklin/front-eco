import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operateur } from './operateur';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OperateurService {

private operateurUrl = 'http://localhost:4000/api/operateur';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getOperateurs (): Observable<Operateur[]> {
    return this.http.get<Operateur[]>(this.operateurUrl)
  }

  getOperateur(id: number): Observable<Operateur> {
    const url = `${this.operateurUrl}/${id}`;
    return this.http.get<Operateur>(url);
  }

  addOperateur (operateur: Operateur): Observable<Operateur> {
    return this.http.post<Operateur>(this.operateurUrl, operateur, httpOptions);
  }

  deleteOperateur (operateur: Operateur | number): Observable<Operateur> {
    const id = typeof operateur === 'number' ? operateur : operateur.id;
    const url = `${this.operateurUrl}/${id}`;

    return this.http.delete<Operateur>(url, httpOptions);
  }

  updateOperateur (operateur: Operateur): Observable<any> {
    return this.http.put(this.operateurUrl, operateur, httpOptions);
  }
}