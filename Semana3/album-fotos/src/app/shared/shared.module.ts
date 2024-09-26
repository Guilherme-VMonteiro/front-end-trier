import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';



@NgModule({
  declarations: [
    ImageCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageCardComponent
  ]
})
export class SharedModule { }
