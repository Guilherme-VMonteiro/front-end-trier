import { Component } from '@angular/core';
import { BotaoMenu } from './models/botao';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  isLogged: boolean = false

  botoes: Array<BotaoMenu> = [
    {nomeBotao: "Mesas", icone:"fa-chair", link: "mesa"},
    {nomeBotao: "Clientes", icone:"fa-users", link: "cliente"},
    {nomeBotao: "Reservas", icone:"fa-clipboard-list", link: "reserva"},
    {nomeBotao: "Pedidos", icone:"fa-clipboard", link: "pedido"},
    {nomeBotao: "Funcionarios", icone:"fa-users-gear", link: "funcionario"},
  ]

  constructor() {
    if (window.localStorage.getItem('restauranteId')) {
      // this.isLogged = true
    }
    console.log(this.isLogged);
  }
}
