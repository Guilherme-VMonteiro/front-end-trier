import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpExampleService {

  constructor(private http: HttpClient) { }

  // .pipe(take(1)) é uma convenção para melhorar a performance de observables, o take(1) coleta o primeiro valor, marca como completada e se desinscreve.
  findAllPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(take(1));
  }

  findById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(take(1));
  }

  findByIdQueryParams(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, { params: { postId: id } }).pipe(take(1));
  }

  create() {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, { title: "teste" }).pipe(take(1));
  }

  update(id: number) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { id: 1, title: "teste" }).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(take(1));
  }
}
