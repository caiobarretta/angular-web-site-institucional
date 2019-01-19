import { NossaVisaoComponent } from './nossa-visao.component';
import { NossaVisaoRoutingModule } from './nossa-visao-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NossaVisaoRoutingModule
  ],
  exports: [
    NossaVisaoComponent
  ],
  declarations: [
    NossaVisaoComponent
  ],
})
export class NossaVisaoModule { }
