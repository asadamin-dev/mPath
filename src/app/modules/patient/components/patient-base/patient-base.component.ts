import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../../../../services/patient.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-patient-base',
  templateUrl: './patient-base.component.html',
  styleUrl: './patient-base.component.scss'
})
export class PatientBaseComponent implements OnInit {

  patientForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.patientForm = this.fb.group({
      name: [{ value: '', disabled: true }, Validators.required],
      contactNo: [{ value: '', disabled: true }, Validators.required],
      dob: [{ value: '', disabled: true }, Validators.required],
      lastVisit: [{ value: '', disabled: true }],
      nextVisit: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      password: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId'); // Get userId from localStorage
    console.log(userId);

    if (userId) {

      this.fetchPatientData(userId);
    }
  }

  fetchPatientData(userId: string): void {
    firstValueFrom(this.patientService.getPatientById(userId))
      .then((data) => {
        if (data) {
          this.patientForm.patchValue({
            name: data.firstName,
            dob: data.dateOfBirth,
            lastVisit: data.lastVisit,
            nextVisit: data.nextVisit,
            email: data.email,
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }
}