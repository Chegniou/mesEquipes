import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  
})
export class EquipesComponent implements OnInit {
 equipes : Equipe[];
  constructor(private equipeService: EquipeService) {
    //this.equipes = [ 
      //{idEquipe : 1, nomEquipe : "Barcelone",   champions: 5,   dateCreation : new Date("11/29/1899")},
      //{idEquipe : 2, nomEquipe : "Real Madrid", champions : 13, dateCreation : new Date("03/06/1902")},
      //{idEquipe : 3, nomEquipe : "Chelsea",     champions : 2,  dateCreation : new Date("03/10/1905")}
      this.equipes = equipeService.listeEquipes();

      // ];
   }

  ngOnInit(): void {
  }
  supprimerEquipe(e: Equipe)
  {
  //console.log(e);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
   this.equipeService.supprimerEquipe(e);


  }
  
}
