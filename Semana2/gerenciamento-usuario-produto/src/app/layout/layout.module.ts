import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MainModule } from '../main/main.module';
import { UsuarioService } from '../main/usuario/services/usuario.service';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MainModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
