import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumModule } from './album/album.module';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlbumModule,
    LayoutModule
  ]
})
export class FeaturesModule { }
