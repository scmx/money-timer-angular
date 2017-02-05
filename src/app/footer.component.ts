import { Component, Input } from '@angular/core'
import { SettingsService } from './settings.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input()
  settings: SettingsService
}
