import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AlbunsListComponent } from './albuns-list/albuns-list.component';
import { AlbunsListModule } from './albuns-list/albuns-list.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AlbunsListModule
  ],
})
export class CoreModule { }
