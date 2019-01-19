import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { AppRoutingModule } from './app-routing.module';
import { ContatoModule } from './contato/contato.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NossaVisaoModule } from './nossa-visao/nossa-visao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContatoModule,
    NossaVisaoModule,
    QuemSomosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
