import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  valorDigitado: String = ""

  @Input() empresa?: String
  @Output() enviarValorDigitadoEvent = new EventEmitter<String>();

  enviarValorDigitado() {
    this.enviarValorDigitadoEvent.emit(this.valorDigitado)
  }
}
