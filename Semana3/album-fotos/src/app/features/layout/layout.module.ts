import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlbumModule } from '../album/album.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AlbumModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
