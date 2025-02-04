import { Component } from '@angular/core';

@Component({
  selector: 'app-healthcare-professionals',
  templateUrl: './healthcare-professionals.component.html',
  styleUrl: './healthcare-professionals.component.scss'
})
export class HealthcareProfessionalsComponent {
  columns = ['Id', 'Name','Email', 'Contact','actions'];
  professionals = [
    { Id: '#123456789', Name: 'Elon Musk', Email:'', Contact: '+1 123 456 7894'},
    { Id: '#987654321', Name: 'Jeff Bezos', Email:'', Contact: '+1 987 654 3210'},
  ];

}
