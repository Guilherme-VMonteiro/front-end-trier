import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClienteModule { }
