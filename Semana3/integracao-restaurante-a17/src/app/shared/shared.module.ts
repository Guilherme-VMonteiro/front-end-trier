import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuButtonComponent } from './components/sub-menu-button/sub-menu-button.component';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';



@NgModule({
  declarations: [
    SubMenuButtonComponent,
    CnpjPipe,
    TelefonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubMenuButtonComponent,
    CnpjPipe,
    TelefonePipe
  ]
})
export class SharedModule { }
