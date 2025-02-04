import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';
import { firstValueFrom } from 'rxjs';
import { HealthcareService } from '../../../../services/healthcare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrl: './admin-base.component.scss',
})
export class AdminBaseComponent {
  professionalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private healthcareService: HealthcareService,
    private router: Router
  ) {
    this.professionalForm = this.fb.group({
      name: ['', Validators.required],
      roleId: [2, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.professionalForm.valid) {
      try {
        const response = await firstValueFrom(
          this.healthcareService.createProf(this.professionalForm.value)
        );

        if (response) {
          console.log('Professional saved successfully:', response);
          this.router.navigate(['professionals']);
          this.professionalForm.reset();
        }
      } catch (error) {
        console.error('Error saving Professional:', error);
        alert('Failed to save Professional!');
      }
    }
  }

  onDelete() {
    this.professionalForm.reset();
  }
}
