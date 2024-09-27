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
}
