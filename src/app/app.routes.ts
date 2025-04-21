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
import { DoctorSignupComponent } from './Pages/DoctorRole/d-signup/d-signup.component';

// Landing Page Components
import { LLayoutComponent } from './Pages/Landing/l-layout/l-layout.component';
import { LHomeComponent } from './Pages/Landing/l-home/l-home.component';
import { LContactComponent } from './Pages/Landing/l-contact/l-contact.component';
import { FaqComponent } from './Pages/Landing/l-faq/l-faq.component';
import { LAboutComponent } from './Pages/Landing/l-about/l-about.component';
import { LBlogComponent } from './Pages/Landing/l-blog/l-blog.component';
import { LoginComponent } from './Pages/Landing/log-in/log-in.component';

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
import { ASettingComponent } from './Pages/admin/a-setting/a-setting.component'; // ✅ New
import { APaymentComponent } from './Pages/admin/a-payment/a-payment.component'; // ✅ New
import { AUserComponent } from './Pages/admin/a-user/a-user.component';         // ✅ New

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'LHome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LLayoutComponent,
    children: [
      { path: 'LHome', component: LHomeComponent },
      { path: 'LBlog', component: LBlogComponent },
      { path: 'LAbout', component: LAboutComponent },
      { path: 'LContact', component: LContactComponent },
      { path: 'LFAQ', component: FaqComponent },
      { path: 'logIn', component: LoginComponent },
      { path: 'SignUp', component: DoctorSignupComponent },
    ],
  },
  {
    path: '',
    component: PLayoutComponent,
    children: [
      { path: 'PHome', component: PHomeComponent },
      { path: 'PAppointment', component: PAppointmentComponent },
      { path: 'PBlog', component: PBlogComponent },
      { path: 'PChat', component: PChatComponent },
      { path: 'PContact', component: PContactUsComponent },
      { path: 'PNotification', component: PNotificationComponent },
      { path: 'PProfile', component: PProfileComponent },
    ],
  },
  {
    path: '',
    component: DLayoutComponent,
    children: [
      { path: 'DHome', component: DHomeComponent },
      { path: 'DAppointment', component: DAppointmentComponent },
      { path: 'DBlog', component: DBlogComponent },
      { path: 'DChat', component: DChatComponent },
      { path: 'DContact', component: DContactComponent },
      { path: 'DNotification', component: DNotificationComponent },
      { path: 'DProfile', component: DProfileComponent },
      { path: 'DSignup', component: DoctorSignupComponent },
    ],
  },
  {
    path: '',
    component: ALayoutComponent,
    children: [
      { path: 'AHome', component: AHomeComponent },
      { path: 'ABlog', component: ABlogComponent },
      { path: 'AAppointment', component: AAppointmentComponent },
      { path: 'ASetting', component: ASettingComponent },     // ✅ New
      { path: 'APayment', component: APaymentComponent },     // ✅ New
      { path: 'AUser', component: AUserComponent },           // ✅ New
    ],
  },
];
