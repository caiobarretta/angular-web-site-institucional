import { ContatoRoutingModule } from './contato-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule,
  ],
  declarations: [
    ContatoComponent
  ],
  exports: [
    ContatoComponent
  ]
})
export class ContatoModule {
 }
