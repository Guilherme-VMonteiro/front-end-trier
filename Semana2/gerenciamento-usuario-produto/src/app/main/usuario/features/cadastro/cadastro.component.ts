import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  form!: FormGroup
  user?: User

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => {
      this.user = usuarioService.getById(param['id']);
    })
  }

  ngOnInit(): void {
    this.buildForm()
    this.form.patchValue(this.user!)
    this.form.get("dataNascimento")?.patchValue(this.user?.dataNascimento.toISOString().substring(0, 10))
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [undefined],
      nome: ["", Validators.required],
      email: ["", (Validators.required, this.validacaoEmail.bind(this))],
      dataNascimento: [null, (Validators.required, this.validacaoNascimento.bind(this))]
    })
  }

  validacaoEmail(email: FormGroup) {
    if (email.value?.indexOf("@") < 0) {
      return { emailInvalido: true }
    }
    return null
  }

  validacaoNascimento(dataNascimento: FormGroup) {
    if (dataNascimento.value == null || dataNascimento.value < Date.parse('04 Dec 1995 00:12:00 GMT')) {
      return { dataNascimentoInvalida: true }
    }
    return null
  }

  cadastrar() {
    this.usuarioService.addUsuario(this.form.getRawValue())
  }
}
