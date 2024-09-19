import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListagemComponent } from './listagem.component';


@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListagemComponent
  ]
})
export class ListagemModule { }
