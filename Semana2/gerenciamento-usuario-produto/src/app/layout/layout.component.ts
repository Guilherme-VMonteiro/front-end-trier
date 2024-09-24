import { Component, OnDestroy } from '@angular/core';
import { UsuarioService } from '../main/usuario/services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnDestroy {
  sidebar: boolean = true

  subscriptions: Array<Subscription> = []

  userQuantity?: number

  constructor(private usuarioService: UsuarioService) {
    this.subscriptions.push(usuarioService.userQuantity$.subscribe(value => this.userQuantity = value))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  toggleSideBar() {
    this.sidebar = !this.sidebar
  }
}
