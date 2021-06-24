import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  NomEnseignant: string = "Mr Arnauld";
  Question: string = "Quelle est la surface de la France en km²?";
  bonneReponse: number = 643801;
  ReponseEtudiant: number = 0;
  IsBonneReponse: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveData(std: any) {
    this.ReponseEtudiant = std;
    this.IsBonneReponse = this.bonneReponse == this.ReponseEtudiant;
  }

}
