import { Restaurante } from './../../restaurante/model/restaurante';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  @Input() titulo?: string = "Adicionar uma nova mesa"

  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.montarFormulario()
  }

  montarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [undefined],
      numero: [undefined, (Validators.required, this.validaInputs.bind(this))],
      capacidadePessoas: [undefined, (Validators.required, this.validaInputs.bind(this))],
      restaurante: [{ id: window.localStorage.getItem("restauranteId") }]
    })
  }

  validaInputs(campo: AbstractControl) {
    if (campo.value == '' || campo.value < 1) {
      return { valorInvalido: true };
    }
    return null;
  }

  cadastrar() {
    console.log(this.formulario.getRawValue());
    console.log(this.formulario.get('numero')?.hasError('valorInvalido'));
    console.log(this.formulario.get('capacidadePessoas')?.hasError('valorInvalido'));
  }
}

