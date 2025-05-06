import { Routes } from '@angular/router';

// Doctor Role Components
import { DHomeComponent } from './Pages/DoctorRole/d-home/d-home.component';
import { DAppointmentComponent } from './Pages/DoctorRole/d-appointment/d-appointment.component';
import { DBlogComponent } from './Pages/DoctorRole/d-blog/d-blog.component';
import { DChatComponent } from './Pages/DoctorRole/d-chat/d-chat.component';
import { DContactComponent } from './Pages/DoctorRole/d-contact/d-contact.component';
import { DNotificationComponent } from './Pages/DoctorRole/d-notification/d-notification.component';
import { DProfileComponent } from './Pages/DoctorRole/d-profile/d-profile.component';
import { DLayoutComponent } from './Pages/DoctorRole/d-layout/d-layout.component';

// Landing Page Components
import { LLayoutComponent } from './Pages/Landing/l-layout/l-layout.component';
import { LHomeComponent } from './Pages/Landing/l-home/l-home.component';
import { LContactComponent } from './Pages/Landing/l-contact/l-contact.component';
import { FaqComponent } from './Pages/Landing/l-faq/l-faq.component';
import { LBlogComponent } from './Pages/Landing/l-blog/l-blog.component';
import { LoginComponent } from './Pages/Landing/log-in/log-in.component';
import { SignUpComponent } from './Pages/Landing/sign-up/sign-up.component';

// Patient Role Components
import { PLayoutComponent } from './Pages/Patient/p-layout/p-layout.component';
import { PHomeComponent } from './Pages/Patient/p-home/p-home.component';
import { PAppointmentComponent } from './Pages/Patient/p-appointment/p-appointment.component';
import { PBlogComponent } from './Pages/Patient/p-blog/p-blog.component';
import { PChatComponent } from './Pages/Patient/p-chat/p-chat.component';
import { PContactUsComponent } from './Pages/Patient/p-contact-us/p-contact-us.component';
import { PNotificationComponent } from './Pages/Patient/p-notification/p-notification.component';
import { PProfileComponent } from './Pages/Patient/p-profile/p-profile.component';

// Admin Role Components
import { ALayoutComponent } from './Pages/admin/a-layout/a-layout.component';
import { AHomeComponent } from './Pages/admin/a-home/a-home.component';
import { ABlogComponent } from './Pages/admin/a-blog/a-blog.component';
import { AAppointmentComponent } from './Pages/admin/a-appointment/a-appointment.component';
import { ASettingComponent } from './Pages/admin/a-setting/a-setting.component';
import { APaymentComponent } from './Pages/admin/a-payment/a-payment.component';
import { AUserComponent } from './Pages/admin/a-user/a-user.component';

// Reusable
import { PaymentComponent } from './Pages/Reusable/payment/payment.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Dashboard/Home',
    pathMatch: 'full',
  },
  {
    path: 'Dashboard',
    component: LLayoutComponent,
    children: [
      { path: 'Home', component: LHomeComponent },
      { path: 'Blog', component: LBlogComponent },
      // Removed 'About' because LAboutComponent was invalid
      { path: 'Contact', component: LContactComponent },
      { path: 'FAQ', component: FaqComponent },
      { path: 'logIn', component: LoginComponent },
      { path: 'SignUp', component: SignUpComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },
  {
    path: 'Doctor',
    component: DLayoutComponent,
    children: [
      { path: 'Home', component: DHomeComponent },
      { path: 'Appointment', component: DAppointmentComponent },
      { path: 'Blog', component: DBlogComponent },
      { path: 'Chat', component: DChatComponent },
      { path: 'Contact', component: DContactComponent },
      { path: 'Notification', component: DNotificationComponent },
      { path: 'Profile', component: DProfileComponent },
      // Removed 'Signup' because DoctorSignupComponent was invalid
    ],
  },
  {
    path: 'Patient',
    component: PLayoutComponent,
    children: [
      { path: 'Home', component: PHomeComponent },
      { path: 'Appointment', component: PAppointmentComponent },
      { path: 'Blog', component: PBlogComponent },
      { path: 'Chat', component: PChatComponent },
      { path: 'Contact', component: PContactUsComponent },
      { path: 'Notification', component: PNotificationComponent },
      { path: 'Profile', component: PProfileComponent },
    ],
  },
  {
    path: 'Admin',
    component: ALayoutComponent,
    children: [
      { path: 'Home', component: AHomeComponent },
      { path: 'Blog', component: ABlogComponent },
      { path: 'Appointment', component: AAppointmentComponent },
      { path: 'Setting', component: ASettingComponent },
      { path: 'Payment', component: APaymentComponent },
      { path: 'User', component: AUserComponent },
    ],
  },
];
