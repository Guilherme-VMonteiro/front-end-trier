import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';

const routes: Routes = [
  {
    path: "",
    component: FuncionarioComponent,
    children: [
      { path: "", component: FuncionarioListComponent },
      {
        path: "cadastro",
        children: [
          { path: "", component: CadastroComponent },
          { path: ":funcionarioId", component: CadastroComponent },
          // { path: "detalhes", component: FuncionarioDetailsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
