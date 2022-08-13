import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { ComplexFormModule } from '../complex-form/complex-form.module';




@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
    ComplexFormModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class CoreModule { }
