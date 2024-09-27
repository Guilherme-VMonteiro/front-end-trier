import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu-button',
  templateUrl: './sub-menu-button.component.html',
  styleUrl: './sub-menu-button.component.scss'
})
export class SubMenuButtonComponent {
  @Input() nomeBotao!: string
  @Input() selected: boolean = false
}
