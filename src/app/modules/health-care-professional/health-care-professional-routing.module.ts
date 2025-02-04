import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthcareBaseComponent } from './components/healthcare-base/healthcare-base.component';
import { PatientsComponent } from './components/patients/patients.component';

const routes: Routes = [
  {
    path: 'form',
    component: HealthcareBaseComponent,
  },

  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthCareProfessionalRoutingModule {}
