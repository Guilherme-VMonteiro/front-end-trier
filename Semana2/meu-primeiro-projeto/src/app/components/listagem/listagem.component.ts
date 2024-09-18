import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {
  @Input() clientes?: Array<Cliente>

  @Output() deletarClienteEvent = new EventEmitter<Number>();
  @Output() editarClienteEvent = new EventEmitter<Cliente>()

  deletarCliente(id: Number) {
    this.deletarClienteEvent.emit(id)
  }

  editarCliente(cliente: Cliente) {
    this.editarClienteEvent.emit(cliente)
  }
}
