import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-p-blog',
  imports: [NgFor],
  templateUrl: './p-blog.component.html',
  styleUrl: './p-blog.component.css',
})
export class PBlogComponent {
  featuredBlog = {
    title: '10 Tips for a Healthy Lifestyle',
    description:
      'Learn how to maintain a healthy lifestyle with these essential tips from experts.',
    image: 'https://source.unsplash.com/800x400/?health,fitness',
  };

  blogs = [
    {
      title: 'Managing Stress for Better Health',
      description: 'Learn stress management techniques for a healthier life.',
      image: 'https://source.unsplash.com/400x250/?stress,relaxation',
    },
    {
      title: 'The Benefits of Regular Exercise',
      description:
        'Discover how regular exercise can improve your physical and mental health.',
      image: 'https://source.unsplash.com/400x250/?exercise,fitness',
    },
    {
      title: 'Healthy Eating Habits',
      description:
        'Get tips on maintaining a balanced diet and nutritious meals.',
      image: 'https://source.unsplash.com/400x250/?food,nutrition',
    },
  ];
}
