import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroProdutoModule } from './features/cadastro-produto/cadastro-produto.module';
import { ListagemProdutoModule } from './features/listagem-produto/listagem-produto.module';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    CadastroProdutoModule,
    ListagemProdutoModule
  ]
})
export class ProdutoModule { }
