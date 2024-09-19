import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {
  router: Router = inject(Router)

  editar(id: Number){
    this.router.navigateByUrl(`funcionario/cadastro/${id}`)
  }

  excluirLinha(id: Number){
    alert(id)
  }
}
