import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { ListagemComponent } from './features/listagem/listagem.component';


@NgModule({
  declarations: [
    ProdutoComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
