import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  newEquipe = new Equipe();
  message : string;
  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
  }

  addEquipe(){
    //console.log(this.newEquipe);
    this.equipeService.ajouterEquipe(this.newEquipe);
    this.message = "Equipe "+this.newEquipe.nomEquipe+" ajoute avec succes !"
    }
}
