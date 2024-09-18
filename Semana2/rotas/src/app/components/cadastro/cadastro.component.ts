import { Component, EventEmitter, Output } from '@angular/core';
import { Funcionario } from '../../models/funcionario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  @Output() enviaCadastroEvent = new EventEmitter<Funcionario>()

  nome: String = ""
  email: String = ""

  coletaCadastro(evento: Event) {
    this.enviaCadastroEvent.emit({ id: undefined, nome: this.nome, email: this.email })
    evento.preventDefault()
  }
}
