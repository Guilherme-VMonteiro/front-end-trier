import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './restaurante.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

const routes: Routes = [
  {
    path: "",
    component: RestauranteComponent,
    children: [
      { path: "", component: ConfiguracoesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
