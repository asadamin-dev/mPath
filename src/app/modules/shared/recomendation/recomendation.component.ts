import { Component } from '@angular/core';
interface Recommendation {
  name: string;
  checked: boolean;
}
@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrl: './recomendation.component.scss'
})
export class RecomendationComponent {

  newRecommendation: string = '';

   
  recommendations: Recommendation[] = [
    { name: 'Diabetic Test', checked: false },
    { name: 'Blood Test', checked: false },
 
  ];

   
  addRecommendation(): void {

    const trimmedValue = this.newRecommendation.trim();
    if (trimmedValue) {
      this.recommendations.push({ name: trimmedValue, checked: false });
      this.newRecommendation = '';  
    }
  }
  
 
  deleteRecommendation(index: number): void {
    this.recommendations.splice(index, 1);
  } 
}
