import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { ListagemComponent } from './features/listagem/listagem.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
