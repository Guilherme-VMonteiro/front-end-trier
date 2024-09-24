import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CardComponent
  ]
})
export class CoreModule { }
