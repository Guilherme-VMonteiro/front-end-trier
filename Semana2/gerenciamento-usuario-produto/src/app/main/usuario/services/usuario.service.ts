import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private id: number = 0
  private usuarios: Array<User> = [
    {id: 1, nome: "Guilherme Monteiro", email: "Guilherme@trier.com", dataNascimento: new Date("2004-12-25")}
  ]

  getList(){
    return this.usuarios
  }

  getById(userId: number): User | undefined {
    return this.usuarios.find(user => user.id == userId);
  }

  addUsuario(usuario: User){
    if(usuario.id == undefined){
      usuario.id = ++this.id;
      this.usuarios.push(usuario)
    }else{
      this.usuarios = this.usuarios.filter((user) => user.id != usuario.id)
      this.usuarios.push(usuario)
    }
  }

  removeUser(id: number){
    this.usuarios = this.usuarios.filter(user => user.id != id)
  }
}
