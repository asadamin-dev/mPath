import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'healthcare',
    loadChildren: () =>
      import(
        './modules//health-care-professional/health-care-professional-routing.module'
      ).then((m) => m.HealthCareProfessionalRoutingModule),
    canActivate: [authGuard],
    data: { roles: ['healthcare'] },
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./modules/patient/patient.module').then((m) => m.PatientModule),
    canActivate: [authGuard],
    data: { roles: ['patient'] },
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
