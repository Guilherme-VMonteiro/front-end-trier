import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginFormularioComponent } from './login-formulario/login-formulario.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [
      { path: "", component: LoginFormularioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
