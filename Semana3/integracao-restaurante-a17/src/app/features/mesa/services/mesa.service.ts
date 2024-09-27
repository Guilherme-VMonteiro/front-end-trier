import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Mesa } from '../model/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }

  getAllByRestauranteId(restauranteId: number){
    return this.http.get<Array<Mesa>>(`http://localhost:8080/mesa/restaurante/${restauranteId}`).pipe(take(1))
  }
}
