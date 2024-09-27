import { Component } from '@angular/core';
import { Mesa } from '../model/mesa';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-mesa-list',
  templateUrl: './mesa-list.component.html',
  styleUrl: './mesa-list.component.scss'
})
export class MesaListComponent {

  mesas!: Array<Mesa>

  constructor(private service: MesaService) {
    this.service.getAllByRestauranteId(Number(window.localStorage.getItem("restauranteId"))).subscribe(mesas => {
      this.mesas = mesas
    })
  }
}
