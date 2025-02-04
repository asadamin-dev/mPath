import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCareProfessionalRoutingModule } from './health-care-professional-routing.module';
import { HealthcareBaseComponent } from './components/healthcare-base/healthcare-base.component';
import { SharedModule } from '../shared/shared.module';
import { PatientsComponent } from './components/patients/patients.component';


@NgModule({
  declarations: [
    HealthcareBaseComponent,
    PatientsComponent
  ],
  imports: [
    CommonModule,
    HealthCareProfessionalRoutingModule,
    SharedModule
  ]
})
export class HealthCareProfessionalModule { }
