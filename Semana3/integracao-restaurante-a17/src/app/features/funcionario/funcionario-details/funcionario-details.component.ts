import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Funcionario } from '../model/funcionario';

@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrl: './funcionario-details.component.scss'
})
export class FuncionarioDetailsComponent implements OnChanges{
  @Input() abrirModal: boolean = false;
  @Input() funcionario!: Funcionario;
  @Output() fecharModalEvent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
  }

  fecharModal(){
    this.fecharModalEvent.emit()
  }
}
