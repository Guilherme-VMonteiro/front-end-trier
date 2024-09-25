import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../../../models/album';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: Album
  @Output() albumOpenedEvent = new EventEmitter<number>()

  albumOpenedEventEmmit(){
    this.albumOpenedEvent.emit(this.data.id)
  }
}
