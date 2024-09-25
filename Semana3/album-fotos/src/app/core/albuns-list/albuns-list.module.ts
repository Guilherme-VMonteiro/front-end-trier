import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsListComponent } from './albuns-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AlbunsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AlbunsListComponent
  ]
})
export class AlbunsListModule { }
