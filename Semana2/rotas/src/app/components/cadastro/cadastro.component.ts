import { Component, EventEmitter, Output } from '@angular/core';
import { Funcionario } from '../../models/funcionario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  @Output() enviaCadastroEvent = new EventEmitter<Funcionario>()

  productId?: Number
  nome: String = ""
  email: String = ""

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((param) => {
      this.productId = param['id']
      console.log(param);
    })
    console.log(this.productId);
  }

  coletaCadastro(evento: Event) {
    this.enviaCadastroEvent.emit({ id: this.productId, nome: this.nome, email: this.email })
    evento.preventDefault()
  }
}
