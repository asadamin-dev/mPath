import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {

  constructor(public router: Router){

  }

   
  columns = ['Id', 'Name', 'Contact', 'DOB', 'Last_Visit', 'Next_Visit', 'actions'];
  patients = [
    { Id: '#123456789', Name: 'Elon Musk', Contact: '+1 123 456 7894', DOB: '1/1/1999', Last_Visit: '03/02/2025', Next_Visit: '15/02/2025' },
    { Id: '#987654321', Name: 'Jeff Bezos', Contact: '+1 987 654 3210', DOB: '5/8/2000', Last_Visit: '05/02/2025', Next_Visit: '18/02/2025' },
    { Id: '#123456789', Name: 'Elon Musk', Contact: '+1 123 456 7894', DOB: '1/1/1999', Last_Visit: '03/02/2025', Next_Visit: '15/02/2025' },
    { Id: '#987654321', Name: 'Jeff Bezos', Contact: '+1 987 654 3210', DOB: '5/8/2000', Last_Visit: '05/02/2025', Next_Visit: '18/02/2025' },
    { Id: '#123456789', Name: 'Elon Musk', Contact: '+1 123 456 7894', DOB: '1/1/1999', Last_Visit: '03/02/2025', Next_Visit: '15/02/2025' },
    { Id: '#987654321', Name: 'Jeff Bezos', Contact: '+1 987 654 3210', DOB: '5/8/2000', Last_Visit: '05/02/2025', Next_Visit: '18/02/2025' },
    { Id: '#123456789', Name: 'Elon Musk', Contact: '+1 123 456 7894', DOB: '1/1/1999', Last_Visit: '03/02/2025', Next_Visit: '15/02/2025' },
    { Id: '#987654321', Name: 'Jeff Bezos', Contact: '+1 987 654 3210', DOB: '5/8/2000', Last_Visit: '05/02/2025', Next_Visit: '18/02/2025' },
    { Id: '#123456789', Name: 'Elon Musk', Contact: '+1 123 456 7894', DOB: '1/1/1999', Last_Visit: '03/02/2025', Next_Visit: '15/02/2025' },
    { Id: '#987654321', Name: 'Jeff Bezos', Contact: '+1 987 654 3210', DOB: '5/8/2000', Last_Visit: '05/02/2025', Next_Visit: '18/02/2025' }
  ];

  goto(route:string){
    this.router.navigate([route]);
  }
 

  
}
