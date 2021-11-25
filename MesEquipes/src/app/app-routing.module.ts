import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipesComponent } from './equipes/equipes.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';

const routes: Routes = [
  {path: "equipes", component : EquipesComponent},
  {path: "add-equipe", component : AddEquipeComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" },
  {path: "updateEquipe/:id", component: UpdateEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
