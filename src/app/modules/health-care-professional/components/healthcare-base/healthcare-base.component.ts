import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../../services/patient.service';

@Component({
  selector: 'app-healthcare-base',
  templateUrl: './healthcare-base.component.html',
  styleUrl: './healthcare-base.component.scss',
})
export class HealthcareBaseComponent {
  patientForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      contactNo: ['', Validators.required],
      dob: ['', Validators.required],
      lastVisit: [''],
      nextVisit: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      this.patientService.createPatient(this.patientForm.value).subscribe(
        (response) => {
          console.log('Patient saved successfully:', response);
          alert('Patient saved successfully!');
          this.patientForm.reset();
        },
        (error) => {
          console.error('Error saving patient:', error);
          alert('Failed to save patient!');
        }
      );
    }
  }

  onDelete() {
    this.patientForm.reset();
  }
}
