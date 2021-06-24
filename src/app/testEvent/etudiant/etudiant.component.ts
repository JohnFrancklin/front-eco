import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  NomEtudiant: string = "Anna-belle";

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  QuestiondeMonEnseignant: string = "";

  @Output()
  ReponseEvent = new EventEmitter<any>();
  ReponseSaisie: any;

  setResponse(ev: Event) {
    this.ReponseSaisie = (ev.target as HTMLInputElement).value
  }

  addReponse() {
    this.ReponseEvent.emit(this.ReponseSaisie);
  }

}
