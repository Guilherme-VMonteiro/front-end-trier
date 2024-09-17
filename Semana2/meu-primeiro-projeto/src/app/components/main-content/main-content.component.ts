import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  @Input() valorDigitado?: String

  clienteParaEditar?: {
    id: number,
    nome: string,
    email: string,
    telefone: string,
  }

  counter: number = 0

  listaDeClientes: Array<{
    id: number;
    nome: string;
    email: string;
    telefone: string;
  }> = []

  coletaEvento(cliente: {
    id: number,
    nome: string,
    email: string,
    telefone: string,
  }) {
    if(cliente.id == 0){
      cliente.id = ++this.counter
      this.listaDeClientes.push(cliente)
    }else{
      let clienteLista = this.listaDeClientes.filter((cli) => cli.id == cliente.id)[0]

      clienteLista.nome = cliente.nome
      clienteLista.email = cliente.email
      clienteLista.telefone = cliente.telefone
    }
  }

  coletaDelecao(id: Number) {
    this.listaDeClientes = this.listaDeClientes.filter((cliente) => cliente.id != id)
  }

  coletarEdicao(cliente: {
    id: number,
    nome: string,
    email: string,
    telefone: string,
  }) {
    this.clienteParaEditar = cliente
  }
}
