import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: "formulario", component: FormularioComponent },
  { path: "formulario/:id", component: FormularioComponent },
  { path: "listagem", component: ListagemComponent },
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
