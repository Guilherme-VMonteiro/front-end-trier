import { Component, Input } from '@angular/core';
import { Album } from '../models/album';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: Album
}
