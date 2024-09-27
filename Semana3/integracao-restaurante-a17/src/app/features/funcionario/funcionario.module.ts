import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { SharedModule } from '../../shared/shared.module';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FuncionarioComponent,
    FuncionarioListComponent,
    FuncionarioDetailsComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FuncionarioModule { }
