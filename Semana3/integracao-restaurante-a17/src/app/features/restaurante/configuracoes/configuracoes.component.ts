import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from '../services/restaurante.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.scss'
})
export class ConfiguracoesComponent implements OnInit{
  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder, private activetedRoute: ActivatedRoute, private restauranteService: RestauranteService) {}

  ngOnInit(): void {
    this.montarFormulario();

    this.coletaRestaurante();
  }

  montarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [undefined],
      nome: [undefined, (Validators.required, this.validaInputs.bind(this))],
      cnpj: [undefined, (Validators.required, this.validaInputs.bind(this))],
      estrelas: [undefined, Validators.required],
      tipoComida: [undefined, Validators.required]
    })
  }

  validaInputs(campo: AbstractControl) {
    if (campo.value == undefined || campo.value == '') {
      return { valorInvalido: true };
    }
    return null;
  }

  atualizarRestaurante() {
    this.restauranteService.updateRestaurante(this.formulario.getRawValue()).subscribe(value => {
      this.formulario.patchValue(value);
    })
  }

  coletaRestaurante(){
    this.restauranteService.getById(Number(window.localStorage.getItem("restauranteId"))).subscribe(value => {
      this.formulario.patchValue(value);
    })
  }
}
