import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Restaurante } from '../model/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient) { }

  getById(restauranteId: number){
    return this.http.get<Restaurante>(`http://localhost:8080/restaurante/${restauranteId}`).pipe(take(1))
  }

  updateRestaurante(restaurante: Restaurante){
    return this.http.put<Restaurante>(`http://localhost:8080/restaurante`, restaurante).pipe(take(1))
  }
}
