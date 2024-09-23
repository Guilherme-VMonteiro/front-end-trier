import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {

  userList!: Array<User>

  constructor(private userService: UsuarioService, private router: Router) {
    this.userList = userService.getList();
  }

  editUser(id: number) {
    this.router.navigateByUrl(`usuario/cadastro/${id}`)
  }

  removeUser(id: number) {
    this.userService.removeUser(id);
    this.userList = this.userService.getList();
  }
}
