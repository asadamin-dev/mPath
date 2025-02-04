import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrl: './admin-base.component.scss'
})
export class AdminBaseComponent {
  professionalForm: FormGroup;
 
 constructor(private fb: FormBuilder, private patientService: AdminService) {
     this.professionalForm = this.fb.group({
       name: ['', Validators.required],
       contactNo: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]],
     });
   }
 
   onSubmit() {
     if (this.professionalForm.valid) {
       this.patientService.createUser(this.professionalForm.value).subscribe(
         (response) => {
           console.log('Professional saved successfully:', response);
           alert('Professional saved successfully!');
           this.professionalForm.reset();
         },
         (error) => {
           console.error('Error saving Professional:', error);
           alert('Failed to save Professional!');
         }
       );
     }
   }
 
   onDelete() {
     this.professionalForm.reset();
   }
 
}
