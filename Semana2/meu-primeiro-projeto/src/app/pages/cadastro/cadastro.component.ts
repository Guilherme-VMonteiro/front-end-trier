import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
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
