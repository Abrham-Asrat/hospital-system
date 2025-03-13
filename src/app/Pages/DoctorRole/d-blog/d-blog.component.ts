import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-d-blog',
  imports: [NgFor],
  templateUrl: './d-blog.component.html',
  styleUrl: './d-blog.component.css',
})
export class DBlogComponent {
  blogs = [
    {
      title: 'Managing Stress in a Busy Medical Career',
      description:
        'Discover how doctors can manage stress while maintaining work-life balance.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrS2RaBJUUdZxOuElsiSRQeFBfMkYx5bd6A&s',
    },
    {
      title: 'The Importance of Regular Health Checkups',
      description:
        'Why routine health screenings are essential for early disease detection.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxugA5NWShE36ee9Ajpxoeg9DurzGypGisUg&s',
    },
    {
      title: 'Nutrition Tips for a Strong Immune System',
      description:
        'Boost your immunity with these expert-recommended nutrition tips.',
      image:
        'https://www.cdc.gov/tobacco/media/images/2024/05/patient-care-1200x675-1.jpg',
    },
  ];
}
