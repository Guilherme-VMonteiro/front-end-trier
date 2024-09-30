import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrl: './login-formulario.component.scss'
})
export class LoginFormularioComponent implements OnInit {

  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.montarFormulario()
  }

  montarFormulario() {
    this.formulario = this.formBuilder.group({
      email: [undefined, Validators.required],
      senha: [undefined, (Validators.required, this.validaSenha.bind(this))],
    })
  }

  validaSenha(campo: AbstractControl){
    if(campo.value == null || campo.value.length < 8){
      return { senhaInvalida: true }
    }
    return null
  }

  entrar() {
    console.log("LOGAR");
  }
}
