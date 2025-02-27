import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';
import { HealthcareProfessionalsComponent } from './components/healthcare-professionals/healthcare-professionals.component';

const routes: Routes = [
  {
    path: 'form',
    component: AdminBaseComponent,
  },

  {
    path: 'professionals',
    component: HealthcareProfessionalsComponent,
  },
  {
    path: '',
    redirectTo: 'professionals',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
