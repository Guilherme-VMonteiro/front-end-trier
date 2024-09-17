import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trier Sistemas';
  valorDigitado?:String;

  coletaValorDigitado(valor: String){
    this.valorDigitado = "Valor digitado: " + valor
  }
}
