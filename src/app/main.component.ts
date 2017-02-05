import { Component, Input } from '@angular/core'
import { Settings } from './settings'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './layout.css',
    './main.component.css',
  ],
})
export class MainComponent {
  @Input()
  settings: Settings
}
