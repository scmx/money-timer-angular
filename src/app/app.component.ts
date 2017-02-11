import { Component, OnInit } from '@angular/core'
import { TranslateService } from 'ng2-translate';
import { SettingsService } from './settings.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private _intervalId: any

  ngOnInit() {
    this._intervalId = setInterval(() => {
      this.settings.update()
    }, this.settings.updateRate)
  }

  constructor(
    public settings: SettingsService,
    private translateService: TranslateService,
  ) {
    translateService.setDefaultLang('sv-se')
    translateService.use('sv-se')
  }
}
