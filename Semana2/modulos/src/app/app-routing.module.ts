import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "produto",
        loadChildren: () => import("./main/produto/produto.module").then((modulo) => modulo.ProdutoModule)
      },
      {
        path: "funcionario",
        loadChildren: () => import("./main/funcionario/funcionario.module").then((modulo) => modulo.FuncionarioModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
