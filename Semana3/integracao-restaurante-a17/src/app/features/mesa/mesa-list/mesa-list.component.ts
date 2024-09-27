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
    this.coletaMesas()
  }

  deletarMesa(mesaId: number) {
    this.service.deleteMesa(mesaId).subscribe(_ => {
      this.coletaMesas()
    })
  }

  coletaMesas(){
    this.service.getAllByRestauranteId(Number(window.localStorage.getItem("restauranteId"))).subscribe(mesas => {
      this.mesas = mesas.sort((a, b) => a.numero - b.numero)
    })
  }
}
