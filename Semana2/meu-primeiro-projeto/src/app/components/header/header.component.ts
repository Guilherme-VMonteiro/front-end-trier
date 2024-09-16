import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  titulo: String = "Trier Sistemas"
  meuLink: String = "https://www.google.com/"
  valorInput: String = ""

  meuMetodo() {
    alert("Event Binding")
  }
}
