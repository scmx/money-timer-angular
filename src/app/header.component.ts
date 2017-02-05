import { Component, Input } from '@angular/core'
import { Settings } from './settings'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './layout.css',
    './header.component.css',
  ],
})
export class HeaderComponent {
  @Input()
  settings: Settings
}
