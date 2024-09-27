import { Component } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { Funcionario } from './../model/funcionario';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrl: './funcionario-list.component.scss'
})
export class FuncionarioListComponent {

  modal: boolean = false;
  funcionario?: Funcionario;
  funcionarios!: Array<Funcionario>;

  constructor(private funcionarioService: FuncionarioService) {
    funcionarioService.getAll().subscribe(value => {
      this.funcionarios = value;
    })
  }

  abrirFecharModal(funcionario: Funcionario) {
    if (funcionario) {
      this.modal = true;
      this.funcionario = funcionario;
    } else {
      this.modal = false;
      this.funcionario = undefined
    }
  }
}
