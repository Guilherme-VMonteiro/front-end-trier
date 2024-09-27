import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteComponent } from './restaurante.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';


@NgModule({
  declarations: [
    RestauranteComponent,
    ConfiguracoesComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RestauranteModule { }
