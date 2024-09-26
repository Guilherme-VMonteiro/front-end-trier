import { Component, Input } from '@angular/core';
import { Album } from '../../../features/album/models/album';
import { Photo } from '../../../features/album/models/photo';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {

  @Input() data!: Album | Photo
}
