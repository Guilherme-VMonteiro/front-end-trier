import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnChanges {
  @Input() empresa?: String
  @Input() cliente?: Cliente
  @Output() formularioEnviadoEvent = new EventEmitter<Cliente>;

  nome: string = ""
  email: string = ""
  fone: string = ""

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((valores) => {
      console.log(valores);
      const idCliente = valores['id']
      console.log(idCliente);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cliente != undefined) {
      this.nome = this.cliente.nome
      this.email = this.cliente.email
      this.fone = this.cliente.telefone
    }
  }

  formularioEnviado() {
    this.formularioEnviadoEvent.emit({
      id: this.cliente != undefined ? this.cliente.id : 0,
      nome: this.nome,
      email: this.email,
      telefone: this.fone
    })
    this.cliente = undefined
    this.nome = ""
    this.email = ""
    this.fone = ""
  }
}
