import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;
@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})

export class RatingComponent {
  rating: number = 0;
  comment: string = '';

  constructor(private http: HttpClient) {}

  setRating(star: number) {
    this.rating = star;
  }

  submitRating() {
    if (this.rating === 0 || !this.comment.trim()) {
      alert('Please provide a rating and a comment.');
      return;
    }

    const payload = {
      rating: this.rating,
      comment: this.comment,
      userId: 123, // replace with dynamic user ID if needed
    };
    // this.http
    //   .post('https://your-backend-api.com/api/ratings', payload)
    //   .subscribe({
    //     next: (res) => {
    //       alert('Thanks for your feedback!');
    //       this.resetForm();
    //       const modal = document.getElementById('ratingModal');
    //       const bsModal = bootstrap.Modal.getInstance(modal);
    //       bsModal?.hide();
    //     },
    //     error: (err) => {
    //       console.error('Failed to submit rating:', err);
    //       alert('Failed to submit rating.');
    //     },
    //   });
  }

  resetForm() {
    this.rating = 0;
    this.comment = '';
  }
}
