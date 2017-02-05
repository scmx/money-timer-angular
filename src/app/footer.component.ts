import { Component, Input } from '@angular/core'
import { Settings } from './settings'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input()
  settings: Settings
}
