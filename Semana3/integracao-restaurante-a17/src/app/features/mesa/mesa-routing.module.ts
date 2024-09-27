import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesaComponent } from './mesa.component';
import { MesaListComponent } from './mesa-list/mesa-list.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: "",
    component: MesaComponent,
    children: [
      { path: "", component: MesaListComponent},
      {
        path: "cadastro",
        children: [
          { path: "", component: CadastroComponent},
          { path: ":mesaId", component: CadastroComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesaRoutingModule { }
