import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroModule } from './features/cadastro/cadastro.module';
import { ListagemModule } from './features/listagem/listagem.module';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';


@NgModule({
  declarations: [
    ProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    CadastroModule,
    ListagemModule
  ]
})
export class ProdutoModule { }
