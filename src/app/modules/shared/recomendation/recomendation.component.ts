import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../../../services/recommendations.service';
import { firstValueFrom } from 'rxjs';  

export interface Recommendation {
  patientId: number;
  description: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.scss']
})
export class RecomendationComponent implements OnInit {

  newRecommendation: string = '';
  id = '';  
  recommendations: Recommendation[] = [];

  constructor(private recommendationService: RecommendationsService) {}

  async ngOnInit() {
    try {
      console.log('ngOnInit called. Fetching recommendations...');
      this.recommendations = await firstValueFrom(
        this.recommendationService.getRecommendation()
      );
      console.log('Received recommendations:', this.recommendations);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
    }
  }

  addRecommendation(): void {
    const trimmedValue = this.newRecommendation.trim();
    if (trimmedValue) {
      const newRec: Recommendation = {
        patientId: +this.id, // Ensure this conversion is intended
        description: trimmedValue,
        isCompleted: false
      };
      this.recommendationService.createRecommendation(newRec).subscribe({
        next: (response) => {
          console.log('Recommendation added:', response);
          this.recommendations.push(newRec);
        },
        error: (err) => console.error('Error adding recommendation:', err)
      });
      this.newRecommendation = '';
    }
  }

  deleteRecommendation(index: number): void {
    this.recommendations.splice(index, 1);
  }
}
