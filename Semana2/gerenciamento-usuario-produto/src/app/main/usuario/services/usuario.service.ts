import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  userQuantity$ = new BehaviorSubject<number>(0)

  private id: number = 0
  private usuarios: Array<User> = [
    { id: 1, nome: "Guilherme Monteiro", email: "Guilherme@trier.com", dataNascimento: new Date("2004-12-25") },
  ]

  constructor(){
    this.userQuantity$.next(this.usuarios.length)
  }

  getList() {
    return this.usuarios
  }

  getById(userId: number): User | undefined {
    return this.usuarios.find(user => user.id == userId);
  }

  addUsuario(usuario: User) {
    if (usuario.id == undefined) {
      usuario.id = ++this.id;
      this.usuarios.push(usuario)
      this.updateUserQuantityObservable()
    } else {
      this.usuarios = this.usuarios.filter((user) => user.id != usuario.id)
      this.usuarios.push(usuario)
    }
  }

  removeUser(id: number) {
    this.usuarios = this.usuarios.filter(user => user.id != id)
    this.updateUserQuantityObservable()
  }

  updateUserQuantityObservable() {
    this.userQuantity$.next(this.usuarios.length)
  }
}
