import { Routes } from '@angular/router';
import { DHomeComponent } from './Pages/DoctorRole/d-home/d-home.component';
import { DAppointmentComponent } from './Pages/DoctorRole/d-appointment/d-appointment.component';
import { DBlogComponent } from './Pages/DoctorRole/d-blog/d-blog.component';
import { DChatComponent } from './Pages/DoctorRole/d-chat/d-chat.component';
import { DContactComponent } from './Pages/DoctorRole/d-contact/d-contact.component';
import { DNotificationComponent } from './Pages/DoctorRole/d-notification/d-notification.component';
import { DProfileComponent } from './Pages/DoctorRole/d-profile/d-profile.component';
import { DLayoutComponent } from './Pages/DoctorRole/d-layout/d-layout.component';
import { LLayoutComponent } from './Pages/Landing/l-layout/l-layout.component';
import { LHomeComponent } from './Pages/Landing/l-home/l-home.component';
import { LContactComponent } from './Pages/Landing/l-contact/l-contact.component';
import { LFAQComponent } from './Pages/Landing/l-faq/l-faq.component';
import { LAboutComponent } from './Pages/Landing/l-about/l-about.component';
import { LBlogComponent } from './Pages/Landing/l-blog/l-blog.component';
import { HomeComponent } from './Pages/Reusable/home/home.component';
import { AppointmentComponent } from './Pages/Reusable/appointment/appointment.component';
import { NotificationComponent } from './Pages/Reusable/notification/notification.component';
import { BlogComponent } from './Pages/Reusable/blog/blog.component';
import { ChatComponent } from './Pages/Reusable/chat/chat.component';
import { ContactComponent } from './Pages/Reusable/contact/contact.component';
import { ProfileComponent } from './Pages/Reusable/profile/profile.component';
import { LayoutComponent } from './Pages/Reusable/layout/layout.component';
import { PLayoutComponent } from './Pages/Patient/p-layout/p-layout.component';
import { LoginComponent } from './Pages/Landing/log-in/log-in.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'logIn',
    pathMatch: 'full',
  },
  {
    path: 'PLayout',
    component: PLayoutComponent,
  },
  {
    path: 'logIn',
    component:LoginComponent,
  },
  {
    path: 'LLayout',
    component: LLayoutComponent,
  },
  {
    path: 'DLayout',
    component: DLayoutComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'Appointment',
        component: AppointmentComponent,
      },
      {
        path: 'Notification',
        component: NotificationComponent,
      },
      {
        path: 'Blog',
        component: BlogComponent,
      },
      {
        path: 'Chat',
        component: ChatComponent,
      },
      {
        path: 'Contact',
        component: ContactComponent,
      },
      {
        path: 'Profile',
        component: ProfileComponent,
      },
      {
        path: 'FAQ',
        component: LFAQComponent,
      },

      {
        path: 'About',
        component: LAboutComponent,
      },
    ],
  },
];
