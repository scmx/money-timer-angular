import { Component, Input } from '@angular/core'
import { SettingsService } from './settings.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.css',
  ],
})
export class MainComponent {
  @Input()
  settings: SettingsService
}
