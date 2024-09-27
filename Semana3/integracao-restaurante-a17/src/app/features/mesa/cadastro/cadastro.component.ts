import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mesa } from '../model/mesa';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  titulo: string = "Adicionar uma nova mesa"
  atualizar: boolean = false
  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder, private activetedRoute: ActivatedRoute, private mesaService: MesaService) {}

  ngOnInit(): void {
    this.montarFormulario()

    this.activetedRoute.params.subscribe(params => {
      if(params['mesaId']){
        this.mesaService.getMesaById(params['mesaId']).subscribe(mesa => {
          this.formulario.patchValue(mesa)
          this.atualizar = true
          this.titulo = "Atualizar mesa"
        })
      }
    })
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
    let rawValue: Mesa = this.formulario.getRawValue()
    if(rawValue['id'] == undefined){
      this.mesaService.createMesa(rawValue).subscribe()
    }else{
      this.mesaService.updateMesa(rawValue).subscribe()
    }
  }
}

