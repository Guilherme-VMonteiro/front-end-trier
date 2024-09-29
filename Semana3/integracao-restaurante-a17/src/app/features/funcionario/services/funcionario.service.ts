import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getAllByRestauranteId(restauranteId: number) {
    return this.http.get<Array<Funcionario>>(`http://localhost:8080/funcionario/restaurante/${restauranteId}`).pipe(take(1))
  }

  getAll() {
    return this.http.get<Array<Funcionario>>(`http://localhost:8080/funcionario`).pipe(take(1))
  }

  getById(idFuncionario: number) {
    return this.http.get<Funcionario>(`http://localhost:8080/funcionario/${idFuncionario}`).pipe(take(1))
  }

  createFuncionario(funcionario: Funcionario) {
    return this.http.post<Funcionario>(`http://localhost:8080/funcionario`,funcionario).pipe(take(1))
  }

  updateFuncionario(funcionario: Funcionario) {
    return this.http.put<Funcionario>(`http://localhost:8080/funcionario`,funcionario).pipe(take(1))
  }

  deleteById(idFuncionario: number) {
    return this.http.delete<Funcionario>(`http://localhost:8080/funcionario/${idFuncionario}`).pipe(take(1))
  }
}
