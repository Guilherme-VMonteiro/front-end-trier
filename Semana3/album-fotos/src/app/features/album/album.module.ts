import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { SharedModule } from '../../shared/shared.module';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumServiceService } from './services/album-service.service';



@NgModule({
  declarations: [
    AlbumListComponent,
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule
  ],
  providers: [
    AlbumServiceService
  ],
  exports: [
    AlbumListComponent,
    PhotosListComponent
  ]
})
export class AlbumModule { }
