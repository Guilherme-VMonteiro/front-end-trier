import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroModule } from './features/cadastro/cadastro.module';
import { ListagemModule } from './features/listagem/listagem.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CadastroModule,
    ListagemModule
  ]
})
export class UsuarioModule { }
