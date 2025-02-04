import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('../admin/admin.module').then((m) => m.AdminModule),
        canActivate: [authGuard],
        data: { roles: ['admin'] },
      },
      {
        path: 'healthcare',
        loadChildren: () =>
          import(
            '../health-care-professional/health-care-professional.module'
          ).then((m) => m.HealthCareProfessionalModule),
        canActivate: [authGuard],
        data: { roles: ['healthcare'] },
      },
      {
        path: 'patient',
        loadChildren: () =>
          import('../patient/patient.module').then((m) => m.PatientModule),
        canActivate: [authGuard],
        data: { roles: ['patient'] },
      },
      { path: '', redirectTo: 'healthcare', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
