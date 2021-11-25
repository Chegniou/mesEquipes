import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EquipeService } from '../services/equipe.service';
import { Equipe } from '../model/equipe.model';


@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styles: []
})
export class UpdateEquipeComponent implements OnInit {

currentEquipe = new Equipe();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.currentEquipe = this.equipeService.consulterEquipe(this.activatedRoute.snapshot.params.id);
console.log(this.currentEquipe);
  }
  updateEquipe()
  { //console.log(this.currentProduit);
  this.equipeService.updateEquipe(this.currentEquipe);
  this.router.navigate(['equipes']);

  }
}
