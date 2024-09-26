import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(private http: HttpClient) { }

  getAlbuns() {
    return this.http.get<Array<Album>>("https://jsonplaceholder.typicode.com/albums").pipe(take(1))
  }

  getAlbumById(albumId: number) {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${albumId}`).pipe(take(1))
  }

  getFotosById(albumId: number) {
    return this.http.get<Array<Photo>>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).pipe(take(1))
  }
}
