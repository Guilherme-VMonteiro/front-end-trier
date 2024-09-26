import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumServiceService } from '../../services/album-service.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent implements OnInit{

  albuns!: Array<Album>

  constructor(private service: AlbumServiceService){}

  ngOnInit(): void {

    this.service.getAlbuns().subscribe((albuns) => {
      this.albuns = albuns;

      this.albuns.map((album) => {
        this.service.getFotosById(album.id).subscribe((photos) => {
          album.photos = photos;
          album.thumbnailUrl = album.photos[0].thumbnailUrl
        })
      })
    })
  }
}
