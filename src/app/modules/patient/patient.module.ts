import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientBaseComponent } from './components/patient-base/patient-base.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PatientBaseComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule
  ]
})
export class PatientModule { }
