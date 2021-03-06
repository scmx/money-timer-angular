import { Component, Input } from '@angular/core'
import { SettingsService } from './settings.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
  ],
})
export class HeaderComponent {
  @Input()
  settings: SettingsService
}
