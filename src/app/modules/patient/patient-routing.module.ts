import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientBaseComponent } from './components/patient-base/patient-base.component';

const routes: Routes = [
  {
    path:'',
    component: PatientBaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
