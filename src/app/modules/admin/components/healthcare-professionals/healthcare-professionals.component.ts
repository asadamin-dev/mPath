import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HealthcareService } from '../../../../services/healthcare.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-healthcare-professionals',
  templateUrl: './healthcare-professionals.component.html',
  styleUrl: './healthcare-professionals.component.scss',
})
export class HealthcareProfessionalsComponent {
  columns = ['Id', 'Name', 'Email', 'actions'];
  professionals = [];

  constructor(
    private router: Router,
    private healthcareService: HealthcareService
  ) {
    this.getProfessionals();
  }

  async getProfessionals() {
    try {
      const response = await firstValueFrom(this.healthcareService.getProf());

      if (response) {
        this.professionals = response;
        console.log(response);
      }
    } catch (error) {
      console.error('Error saving Professional:', error);
      alert('Failed to save Professional!');
    }
  }
}
