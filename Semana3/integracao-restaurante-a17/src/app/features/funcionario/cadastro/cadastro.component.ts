import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../services/funcionario.service';
import { SexoEnum } from '../model/sexo';
import { CargoEnum } from '../model/cargo';
import { Funcionario } from '../model/funcionario';

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
      if(params['funcionarioId']){
        this.funcionarioService.getById(params['funcionarioId']).subscribe(value => {
          this.atualizar = !this.atualizar
          value.sexo = Object.values(SexoEnum).indexOf(value.sexo)
          value.cargo = Object.values(CargoEnum).indexOf(value.cargo)
          this.formulario.patchValue(value);
          this.titulo = "Atualizar Funcionário"
        })
      }
    })
  }

  montarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [undefined],
      nome: [undefined, (Validators.required, this.validaNome.bind(this))],
      sobrenome: [undefined, (Validators.required, this.validaNome.bind(this))],
      cpf: [undefined, (Validators.required, this.validaCpf.bind(this))],
      dataNascimento: [undefined, (Validators.required, this.validaDataNascimento.bind(this))],
      sexo: [undefined, (Validators.required, this.validaSexo.bind(this))],
      telefone: [undefined, (Validators.required, this.validaTelefone.bind(this))],
      cargo: [undefined, (Validators.required, this.validaCargo.bind(this))],
      dataAdmisao: [new Date().toISOString().split('T')[0], Validators.required],
      salario: [undefined, (Validators.required, this.validaSalario.bind(this))],
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
    if (campo.value == "" || campo.value == null || campo.value.length < 4 || campo.value.length > 60) {
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
    const valorCampo: Date = new Date(Date.parse(campo.value));

    if (campo.value === null || valorCampo === undefined || valorCampo === null) {
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

  validaSexo(campo: AbstractControl) {
    if (campo.value === "" || campo.value === null) {
      return { sexoInvalido: true };
    }
    return null;
  }

  validaTelefone(campo: AbstractControl) {
    if (campo.value === "" || campo.value === null || campo.value.length < 11 || campo.value.length > 13) {
      return { telefoneInvalido: true };
    }
    return null;
  }

  validaCargo(campo: AbstractControl) {
    if (campo.value === "" || campo.value === null) {
      return { cargoInvalido: true };
    }
    return null;
  }

  validaSalario(campo: AbstractControl) {
    if(this.formulario){
      if (
        this.formulario.get('cargo')?.value === null ||
        (this.formulario.get('cargo')?.value === "3" && campo.value > 1412.00) ||
        (this.formulario.get('cargo')?.value != "3" && campo.value <= 1412.00)) {
        return { salarioInvalido: true }
      }
    }
    return null
  }

  cadastrar() {
    const funcionario: Funcionario = this.formulario.getRawValue()
    if(funcionario.id){
      this.funcionarioService.updateFuncionario(funcionario).subscribe(valor => {})
    }else{
      this.funcionarioService.createFuncionario(funcionario).subscribe(valor => {})
    }
  }
}
