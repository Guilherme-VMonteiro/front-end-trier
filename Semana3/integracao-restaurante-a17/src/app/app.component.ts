import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'integracao-restaurante-a17';

  constructor(){
    let storage = window.localStorage

    storage.setItem("restauranteId", "1")
  }
}
