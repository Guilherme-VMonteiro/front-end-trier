import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MesaListComponent } from './mesa-list/mesa-list.component';
import { MesaRoutingModule } from './mesa-routing.module';
import { MesaComponent } from './mesa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MesaComponent,
    MesaListComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    MesaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    MesaComponent
  ]
})
export class MesaModule { }
