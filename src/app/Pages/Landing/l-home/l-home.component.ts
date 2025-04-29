import { NgFor, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l-home',
  imports: [NgFor, SignUpComponent, NgClass, NgIf],
  templateUrl: './l-home.component.html',
  styleUrl: './l-home.component.css',
})
export class LHomeComponent {
  constructor(private router: Router) {}
  book() {
    setTimeout(() => {
      this.router.navigate(['Patient/Appointment']);
    }, 1000);
  }
  // services
  services = [
    {
      icon: 'assets/icons/laboratory-microscope.svg',
      title: 'Well equipped lab',
    },
    {
      icon: 'assets/icons/ambulance.svg',
      title: 'Emergency Ambulance',
    },
    {
      icon: 'assets/icons/appointment.svg',
      title: 'Online Appointment',
    },
    { icon: 'assets/icons/call-center.svg', title: 'Call Center' },
  ];

  activeCardIndex: number = 1;

  setActiveCard(index: number): void {
    this.activeCardIndex = index;
  }

  // doctors render
  doctors = [
    {
      image: 'assets/images/doctor1.png',
      name: 'Dr. Robert Henry',
      specialty: 'Cardiologist',
      ratings: '★★★★★',
      reviews: '(102)',
    },
    {
      image: 'assets/images/image2.png',
      name: 'Dr. Harry Littleton',
      specialty: 'Neurologist',
      ratings: '★★★★★',
      reviews: '(97)',
    },
    {
      image: 'assets/images/image3.png',
      name: 'Dr. Sharina Khan',
      specialty: 'Gynecologist',
      ratings: '★★★★★',
      reviews: '(115)',
    },
    {
      image: 'assets/images/image4.png',
      name: 'Dr. Sanjeev Kapoor',
      specialty: 'Child Specialist',
      ratings: '★★★★★',
      reviews: '(73)',
    },
    {
      image: 'assets/images/image3.png',
      name: 'Dr. Emily Watson',
      specialty: 'Dermatologist',
      ratings: '★★★★☆',
      reviews: '(85)',
    },
    {
      image: 'assets/images/image4.png',
      name: 'Dr. Michael Johnson',
      specialty: 'Orthopedic Surgeon',
      ratings: '★★★★★',
      reviews: '(120)',
    },
  ];
  // Track whether to show all cards or just the first 4
  showAllCards: boolean = false;

  // Method to toggle between showing limited and all cards
  toggleShowAllCards(): void {
    this.showAllCards = !this.showAllCards; // Toggle the state
  }

  // Get the visible doctors based on the current state
  get visibleDoctors(): any[] {
    return this.showAllCards ? this.doctors : this.doctors.slice(0, 4);
  }

  // Array of testimonials
  testimonials = [
    {
      image: 'assets/images/image2.png',
      name: 'Sara Ali Khan',
      type: 'Cardiologist Patient',
      rating: '★★★★★',
      message: 'Thanks for all the services, no doubt it is the best hospital.',
    },
    {
      image: 'assets/images/image.png',
      name: 'Simon Targett',
      type: 'Neurologist Patient',
      rating: '★★★★★',
      message: 'Thanks for all the services, no doubt it is the best hospital.',
    },
    {
      image: 'assets/images/image4.png',
      name: 'Sara Ali Khan',
      type: 'Cardiologist Patient',
      rating: '★★★★★',
      message: 'Thanks for all the services, no doubt it is the best hospital.',
    },
    {
      image: 'assets/images/image2.png',
      name: 'John Doe',
      type: 'Orthopedic Patient',
      rating: '★★★★☆',
      message: 'Great experience with the staff and doctors!',
    },
    {
      image: 'assets/images/image4.png',
      name: 'Jane Smith',
      type: 'Dermatology Patient',
      rating: '★★★★★',
      message: 'Highly recommend this hospital for skin treatments.',
    },
  ];

  // latest blog

  blogs = [
    {
      image: 'assets/images/image10.png',
      title: 'Card title',
      description:
        'Card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisl.',
      link: '#',
    },
    {
      image: 'assets/images/image10.png',
      title: 'Card title',
      description:
        'Card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisl.',
      link: '#',
    },
    {
      image: 'assets/images/image11.png',
      title: 'Card title',
      description:
        'Card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisl.',
      link: '#',
    },
  ];

  // Track which article is featured
  featuredArticleIndex: number = 0;
}
