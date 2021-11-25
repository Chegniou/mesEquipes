import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  equipes : Equipe[];

  equipe : Equipe;
  
  constructor() { 
    this.equipes = [ 
      {idEquipe : 1, nomEquipe : "Barcelone",   champions: 5,   dateCreation : new Date("11/29/1899")},
      {idEquipe : 2, nomEquipe : "Real Madrid", champions : 13, dateCreation : new Date("03/06/1902")},
      {idEquipe : 3, nomEquipe : "Chelsea",     champions : 2,  dateCreation : new Date("03/10/1905")}
       ];
  }
  listeEquipes():Equipe[] {
    return this.equipes;
  }
 ajouterEquipe( equ: Equipe){
    this.equipes.push(equ);
  }

  supprimerEquipe( prod: Equipe){
    //supprimer le produit prod du tableau produits
    const index = this.equipes.indexOf(prod, 0);
    if (index > -1) {
    this.equipes.splice(index, 1);
  }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
  }
  }); */
  }

  consulterEquipe(id:number): Equipe{
    this.equipe = this.equipes.find(p => p.idEquipe == id);
    return this.equipe;
    }

    trierEquipes(){
      this.equipes = this.equipes.sort((n1,n2) => {
      if (n1.idEquipe > n2.idEquipe) {
      return 1;
      }
      if (n1.idEquipe < n2.idEquipe) {
      return -1;
      }
      return 0;
      });
      }
    updateEquipe(e:Equipe){
        // console.log(p);
       this.supprimerEquipe(e);
       this.ajouterEquipe(e);
       this.trierEquipes();
}
}
