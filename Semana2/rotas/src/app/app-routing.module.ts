import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaginaNaoExistenteComponent } from './components/pagina-nao-existente/pagina-nao-existente.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  {
    path: "funcionario",
    children: [
      {
        path: "cadastro",
        children: [
          { path: "", component: CadastroComponent, pathMatch: "full" },
          { path: ":id", component: CadastroComponent },
        ]
      },
      { path: "listagem", component: ListagemComponent },
    ]
  },
  { path: "**", component: PaginaNaoExistenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
