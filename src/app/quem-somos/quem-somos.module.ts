import { QuemSomosRoutingModule } from './quem-somos-routing.module';
import { QuemSomosComponent } from './quem-somos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    QuemSomosRoutingModule
  ],
  exports: [
    QuemSomosComponent
  ],
  declarations: [
    QuemSomosComponent
  ],
})
export class QuemSomosModule { }
