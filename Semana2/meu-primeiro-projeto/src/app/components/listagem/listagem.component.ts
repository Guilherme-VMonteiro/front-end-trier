import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {
  @Input() clientes?: Array<{
    id: number;
    nome: string;
    email: string;
    telefone: string;
  }>

  @Output() deletarClienteEvent = new EventEmitter<Number>();
  @Output() editarClienteEvent = new EventEmitter<{
    id: number;
    nome: string;
    email: string;
    telefone: string;
  }>()

  deletarCliente(id: Number) {
    this.deletarClienteEvent.emit(id)
  }

  editarCliente(cliente: {
    id: number;
    nome: string;
    email: string;
    telefone: string;
  }) {
    this.editarClienteEvent.emit(cliente)
  }
}
