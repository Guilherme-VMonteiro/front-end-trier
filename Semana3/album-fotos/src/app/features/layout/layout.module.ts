import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    BaseLayoutComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    BaseLayoutComponent
  ]
})
export class LayoutModule { }
