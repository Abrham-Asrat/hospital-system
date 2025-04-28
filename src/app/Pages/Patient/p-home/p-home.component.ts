import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-p-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './p-home.component.html',
  styleUrls: ['./p-home.component.css'],
})

export class PHomeComponent {
  searchName: string = '';
  searchSpeciality: string = '';
  availableOnly: boolean = false;

  appointments = [
    {
      doctor: 'Dr. Robert Henry',
      speciality: 'Cardiologist',
      date: '2025-05-03',
      time: '10:00 AM',
    },
    {
      doctor: 'Dr. Sharina Khan',
      speciality: 'Gynecologist',
      date: '2025-05-10',
      time: '01:00 PM',
    },
  ];

  doctors = [
    {
      name: 'Dr. Robert Henry',
      speciality: 'Cardiologist',
      image: '../../../../assets/Images/doctor1.png',
      reviews: 102,
    },
    {
      name: 'Dr. Sharina Khan',
      speciality: 'Gynecologist',
      image: '../../../../assets/Images/image3.png',
      reviews: 115,
    },
    {
      name: 'Dr. Sanjeev Kapoor',
      speciality: 'Child Specialist',
      image: '../../../../assets/Images/image4.png',
      reviews: 73,
    },
  ];

  filteredDoctors = [...this.doctors];

  searchDoctor() {
    this.filteredDoctors = this.doctors.filter((doc) => {
      return (
        (!this.searchName ||
          doc.name.toLowerCase().includes(this.searchName.toLowerCase())) &&
        (!this.searchSpeciality ||
          doc.speciality
            .toLowerCase()
            .includes(this.searchSpeciality.toLowerCase()))
      );
    });
  }
}
