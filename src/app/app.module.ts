import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule, Http } from '@angular/http'
import {
  TranslateModule, TranslateLoader, TranslateStaticLoader
} from 'ng2-translate'

import { SettingsService } from './settings.service'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header.component'
import { MainComponent } from './main.component'
import { FooterComponent } from './footer.component'

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
  ],
  providers: [
    SettingsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
