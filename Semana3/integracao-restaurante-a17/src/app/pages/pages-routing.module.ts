import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    children: [
      {
        path: "login",
        loadChildren: () => import("../features/login/login.module").then((modulo) => modulo.LoginModule)
      },
      {
        path: "mesa",
        loadChildren: () => import("../features/mesa/mesa.module").then((modulo) => modulo.MesaModule)
      },
      {
        path: "restaurante",
        loadChildren: () => import("../features/restaurante/restaurante.module").then((modulo) => modulo.RestauranteModule)
      },
      {
        path: "funcionario",
        loadChildren: () => import("../features/funcionario/funcionario.module").then((modulo) => modulo.FuncionarioModule)
      },
      {
        path: "cliente",
        loadChildren: () => import("../features/cliente/cliente.module").then((modulo) => modulo.ClienteModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
