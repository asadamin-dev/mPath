import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';
import { SharedModule } from '../shared/shared.module';
import { HealthcareProfessionalsComponent } from './components/healthcare-professionals/healthcare-professionals.component';


@NgModule({
  declarations: [
    AdminBaseComponent,
    HealthcareProfessionalsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
