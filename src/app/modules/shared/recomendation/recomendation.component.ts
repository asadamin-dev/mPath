import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../../../services/recommendations.service';

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
  id = '';  // Consider using a number if possible (e.g., id: number = 0;)
  recommendations: Recommendation[] = [];

  constructor(private recommendationService: RecommendationsService) {}

  ngOnInit() {
    this.recommendationService.getRecommendation().subscribe(data => {
      this.recommendations = data;
    });
  }

  addRecommendation(): void {
    const trimmedValue = this.newRecommendation.trim();
    if (trimmedValue) {
      const newRec: Recommendation = {
        patientId: +this.id, // Ensure this conversion is intended
        description: trimmedValue,
        isCompleted: false
      };
      this.recommendationService.createRecommendation(newRec);
      this.newRecommendation = '';
    }
  }

  deleteRecommendation(index: number): void {
    this.recommendations.splice(index, 1);
  }
}
