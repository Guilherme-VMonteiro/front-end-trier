import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../core/services/foto-service.service';
import { Album } from '../core/models/album';
import { Photo } from '../core/models/photo';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  albuns!: Array<Album>
  fotos!: Array<Photo>

  constructor(private fotoService: FotoServiceService) {  }

  ngOnInit(): void {
    this.fotoService.getAlbuns().subscribe((albuns) => {
      this.fotoService.getFotos().subscribe((photos) => {
        this.fotos = photos;
        console.log(this.fotos);

        this.albuns = albuns.map((album) => {
          album.photos = this.fotos.filter(foto => foto.albumId == album.id).slice(10)
          album.img = album.photos[0].thumbnailUrl
          return album
        });
        console.log(this.albuns);
      })
    })
  }
}
