import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Mesa } from './../model/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }

  getAllByRestauranteId(restauranteId: number){
    return this.http.get<Array<Mesa>>(`http://localhost:8080/mesa/restaurante/${restauranteId}`).pipe(take(1))
  }

  getMesaById(mesaId: number){
    return this.http.get<Mesa>(`http://localhost:8080/mesa/${mesaId}`).pipe(take(1))
  }

  createMesa(mesa: Mesa){
    return this.http.post<Mesa>(`http://localhost:8080/mesa`, mesa).pipe(take(1))
  }

  updateMesa(mesa: Mesa){
    return this.http.put<Mesa>(`http://localhost:8080/mesa`, mesa).pipe(take(1))
  }

  deleteMesa(mesaId: number){
    return this.http.delete<void>(`http://localhost:8080/mesa/${mesaId}`).pipe(take(1))
  }
}
