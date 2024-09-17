import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    if(this.cliente != undefined){
      this.nome = this.cliente.nome
      this.email = this.cliente.email
      this.fone = this.cliente.telefone
    }
  }

  nome: string = ""
  email: string = ""
  fone: string = ""

  @Input() empresa?: String

  @Input() cliente?: {
    id: number,
    nome: string,
    email: string,
    telefone: string
  }

  @Output() formularioEnviadoEvent = new EventEmitter<{
    id: number,
    nome: string,
    email: string,
    telefone: string
  }>;

  formularioEnviado() {
    this.formularioEnviadoEvent.emit({
      id: this.cliente != undefined ? this.cliente.id : 0 ,
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
