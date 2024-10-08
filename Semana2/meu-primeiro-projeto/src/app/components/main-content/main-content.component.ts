import { Component, Input, Output } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent{
  clienteParaEditar?: Cliente

  counter: number = 0
  listaDeClientes: Array<Cliente> = []

  coletaEvento(cliente: Cliente) {
    if (cliente.id == 0) {
      cliente.id = ++this.counter
      this.listaDeClientes.push(cliente)
    } else {
      let clienteLista = this.listaDeClientes.filter((cli) => cli.id == cliente.id)[0]

      clienteLista.nome = cliente.nome
      clienteLista.email = cliente.email
      clienteLista.telefone = cliente.telefone
    }
    this.clienteParaEditar = undefined
  }

  coletaDelecao(id: Number) {
    this.listaDeClientes = this.listaDeClientes.filter((cliente) => cliente.id != id)
  }

  coletarEdicao(cliente: Cliente) {
    this.clienteParaEditar = cliente
  }
}
