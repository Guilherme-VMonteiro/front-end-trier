import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumServiceService } from '../../services/album-service.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.scss'
})
export class PhotosListComponent implements OnInit {

  albumId?: number

  album!: Album

  constructor(private service: AlbumServiceService, private activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(params => {
      this.albumId = params['albumId']
    })
  }

  ngOnInit(): void {

    this.service.getAlbumById(this.albumId!).subscribe((album) => {
      this.album = album;

      this.service.getFotosById(this.albumId!).subscribe((photos) => {
        this.album.photos = photos;
        this.album.thumbnailUrl = this.album.photos[0].thumbnailUrl
      })
    })
  }
}
