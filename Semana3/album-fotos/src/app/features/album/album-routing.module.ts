import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

const routes: Routes = [
  { path: "", component: AlbumListComponent },
  { path: ":albumId", component: PhotosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
