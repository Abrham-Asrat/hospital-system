import { NgFor } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-l-home',
  imports: [],
  templateUrl: './l-home.component.html',
  styleUrl: './l-home.component.css',
})
export class LHomeComponent{
//   doctors = [
//     {
//       name: 'Dr. Workaba',
//       specialty: 'Pharmacologist',
//       image:
//         'https://www.ethiopianmedicalass.org/wp-content/uploads/2021/02/workabeba.png',
//     },
//     {
//       name: 'Dr. Abebe',
//       specialty: 'Pharmacologist',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdh7IM7gcS_y0y4avsGifXcUa-P0mGH7ihQ&s',
//     },
//     {
//       name: 'Dr. Workaba',
//       specialty: 'Pharmacologist',
//       image:
//         'https://www.ethiopianmedicalass.org/wp-content/uploads/2021/02/workabeba.png',
//     },
//     {
//       name: 'Dr. Abebe',
//       specialty: 'Pharmacologist',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdh7IM7gcS_y0y4avsGifXcUa-P0mGH7ihQ&s',
//     },
//     {
//       name: 'Dr. Workaba',
//       specialty: 'Pharmacologist',
//       image:
//         'https://www.ethiopianmedicalass.org/wp-content/uploads/2021/02/workabeba.png',
//     },
//     {
//       name: 'Dr. Abebe',
//       specialty: 'Pharmacologist',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdh7IM7gcS_y0y4avsGifXcUa-P0mGH7ihQ&s',
//     },
//     {
//       name: 'Dr. Workaba',
//       specialty: 'Pharmacologist',
//       image:
//         'https://www.ethiopianmedicalass.org/wp-content/uploads/2021/02/workabeba.png',
//     },
//     {
//       name: 'Dr. Abebe',
//       specialty: 'Pharmacologist',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdh7IM7gcS_y0y4avsGifXcUa-P0mGH7ihQ&s',
//     },
//     {
//       name: 'Dr. Workaba',
//       specialty: 'Pharmacologist',
//       image:
//         'https://www.ethiopianmedicalass.org/wp-content/uploads/2021/02/workabeba.png',
//     },
//     {
//       name: 'Dr. Abebe',
//       specialty: 'Pharmacologist',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdh7IM7gcS_y0y4avsGifXcUa-P0mGH7ihQ&s',
//     },
//     {
//       name: 'Dr. Workaba 2',
//       specialty: 'Pharmacologist',
//       image:
//         'https://www.ethiopianmedicalass.org/wp-content/uploads/2021/02/workabeba.png',
//     },
//     {
//       name: 'Dr. Abebe',
//       specialty: 'Pharmacologist',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdh7IM7gcS_y0y4avsGifXcUa-P0mGH7ihQ&s',
//     },
//   ];
//   specialties = [
//     'Cardiology',
//     'Dermatology',
//     'Neurology',
//     'Orthopedics',
//     'Pediatrics',
//     'Radiology',
//     'Surgery',
//     'Urology',
//     'Oncology',
//     'Gastroenterology',
//     'Endocrinology',
//     'Urology',
//     'Oncology',
//     'Gastroenterology',
//     'Endocrinology',
//   ];
//   // ngAfterViewInit() {
//   //   this.enableSingleCardScroll();
//   // }
//   enableSingleCardScroll() {
//     const container = document.getElementById('cardContainer') as HTMLElement;
//     // for card navigation
//     const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
//     const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;

//     // for speciailty navigation
//     const nextSpecial = document.getElementById('next') as HTMLButtonElement;
//     const prevSpecial = document.getElementById('prev') as HTMLButtonElement;

//     let scrollAmountSpecial = 0;
//     let scrollAmountCard = 0;
//     const cardWidth =
//       document.querySelector('.doctor-card')?.clientWidth || 220; // Get card width
//     const gap = 10; // Gap between cards
//     const visibleWidth = container.clientWidth; // Width of visible container
//     const totalScrollableWidth = container.scrollWidth; // Total width of all cards

//     // ✅ Function to update button states
//     function updateButtonStates() {
//       // for top doctor
//       prevBtn.disabled = scrollAmountCard <= 0;
//       // ✅ Ensure last card is fully visible before disabling next
//       nextBtn.disabled =
//         scrollAmountCard + visibleWidth >= totalScrollableWidth;

//       // for specialty
//       prevSpecial.disabled = scrollAmountSpecial <= 0;
//       // ✅ Ensure last card is fully visible before disabling next
//       nextSpecial.disabled =
//         scrollAmountSpecial + visibleWidth >= totalScrollableWidth;
//     }

//     // doctor Navigation
//     nextBtn?.addEventListener('click', () => {
//       if (
//         scrollAmountCard + cardWidth + gap <
//         totalScrollableWidth - visibleWidth
//       ) {
//         // Prevent hiding last card
//         scrollAmountCard += cardWidth + gap; // Adjust for margin
//       } else {
//         scrollAmountCard = totalScrollableWidth - visibleWidth; // Ensure last card is visible
//       }
//       container.style.transform = `translateX(-${scrollAmountCard}px)`;
//       updateButtonStates();
//     });

//     prevBtn?.addEventListener('click', () => {
//       console.log(`⬅️ Before Prev Click: scrollAmount = ${scrollAmountCard}`);
//       scrollAmountCard -= cardWidth + gap;
//       if (scrollAmountCard < 0) scrollAmountCard = 0; // Prevent scrolling back too far
//       container.style.transform = `translateX(-${scrollAmountCard}px)`;
//       console.log(`⬅️ After Prev Click: scrollAmount = ${scrollAmountCard}`);
//       updateButtonStates();
//     });
//     const specialContainer = document.getElementById(
//       'specialtyContainer'
//     ) as HTMLElement;

//     const visibleWidthSpecial = specialContainer.clientWidth; // Width of visible container
//     const totalScrollableWidthSpecial = specialContainer.scrollWidth; // Total width of all cards

//     // specialty
//     nextSpecial?.addEventListener('click', () => {
//       console.log(
//         `➡️ Before Next Click: scrollAmount = ${scrollAmountSpecial}`
//       );
//       if (
//         scrollAmountSpecial + cardWidth + gap <
//         totalScrollableWidthSpecial - visibleWidthSpecial
//       ) {
//         // Prevent hiding last card
//         scrollAmountSpecial += cardWidth + gap; // Adjust for margin
//       } else {
//         scrollAmountSpecial = totalScrollableWidthSpecial - visibleWidthSpecial; // Ensure last card is visible
//       }
//       specialContainer.style.transform = `translateX(-${scrollAmountSpecial}px)`;

//       updateButtonStates();
//     });

//     prevSpecial?.addEventListener('click', () => {
//       scrollAmountSpecial -= cardWidth + gap;
//       if (scrollAmountSpecial < 0) scrollAmountSpecial = 0; // Prevent scrolling back too far
//       specialContainer.style.transform = `translateX(-${scrollAmountSpecial}px)`;
//       updateButtonStates();
//     });

//     // ✅ Initial button state update
//     updateButtonStates();
//   }



//   // scroll InTo view
//   @ViewChild('section1') section1!: ElementRef;

//  scrollToSection() {
//     this.section1.nativeElement.scrollIntoView({ behavior: 'smooth' });
//   }
}
