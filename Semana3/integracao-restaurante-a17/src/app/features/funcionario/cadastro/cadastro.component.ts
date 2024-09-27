import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  titulo: string = "Adicionar um novo Funcionário"
  atualizar: boolean = false
  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder, private activetedRoute: ActivatedRoute, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.montarFormulario()

    this.activetedRoute.params.subscribe(params => {
      //TODO
    })
  }

  montarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [undefined],
      nome: [undefined, (Validators.required, this.validaNome.bind(this))],
      sobrenome: [undefined, (Validators.required, this.validaNome.bind(this))],
      cpf: [undefined, (Validators.required, this.validaCpf.bind(this))],
      dataNascimento: [undefined, (Validators.required, this.validaDataNascimento.bind(this))],
      sexo: [undefined, Validators.required],
      telefone: [undefined, Validators.required],
      cargo: [undefined, Validators.required],
      dataAdmisao: [undefined, Validators.required],
      salario: [undefined, Validators.required],
      cargaHoraria: [undefined, Validators.required],
      restaurante: [{ id: window.localStorage.getItem("restauranteId") }]
    })
  }

  validaInputs(campo: AbstractControl) {
    if (campo.value == '' || campo.value < 1) {
      return { valorInvalido: true };
    }
    return null;
  }

  validaNome(campo: AbstractControl) {
    if (campo.value == "" || campo.value == null || campo.value.length < 4) {
      return { nomeInvalido: true };
    }
    return null;
  }

  validaCpf(campo: AbstractControl) {
    if (campo.value == "" || campo.value == null || (campo.value.length != 11 && campo.value.length != 14)) {
      return { cpfInvalido: true };
    }
    return null;
  }

  validaDataNascimento(campo: AbstractControl) {
    const hoje = new Date();
    const valorCampo = campo.value

    if (valorCampo == undefined || valorCampo == null) {
      return { dataDeNascimentoInvalida: true };
    }

    let idade = hoje.getFullYear() - valorCampo.getFullYear();
    const mes = hoje.getMonth() - valorCampo.getMonth()

    if (mes < 0 || (mes === 0 && hoje.getDay() < valorCampo.getDate())) {
      idade--;
    }

    if (idade < 12 || idade > 100) {
      return { dataDeNascimentoInvalida: true };
    }

    return null;
  }

  cadastrar() {
    console.log("CADASTRAR");
    console.log(this.formulario.getRawValue());
  }
}
