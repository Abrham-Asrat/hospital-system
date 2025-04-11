import { Routes } from '@angular/router';

// Doctor Components
import { DHomeComponent } from './Pages/DoctorRole/d-home/d-home.component';
import { DAppointmentComponent } from './Pages/DoctorRole/d-appointment/d-appointment.component';
import { DBlogComponent } from './Pages/DoctorRole/d-blog/d-blog.component';
import { DChatComponent } from './Pages/DoctorRole/d-chat/d-chat.component';
import { DContactComponent } from './Pages/DoctorRole/d-contact/d-contact.component';
import { DNotificationComponent } from './Pages/DoctorRole/d-notification/d-notification.component';
import { DProfileComponent } from './Pages/DoctorRole/d-profile/d-profile.component';
import { DLayoutComponent } from './Pages/DoctorRole/d-layout/d-layout.component';

// Landing Components
import { LLayoutComponent } from './Pages/Landing/l-layout/l-layout.component';
import { LHomeComponent } from './Pages/Landing/l-home/l-home.component';
import { LContactComponent } from './Pages/Landing/l-contact/l-contact.component';
import { FaqComponent } from './Pages/Landing/l-faq/l-faq.component';
import { LAboutComponent } from './Pages/Landing/l-about/l-about.component';
import { LBlogComponent } from './Pages/Landing/l-blog/l-blog.component';
import { LoginComponent } from './Pages/Landing/log-in/log-in.component';

// Patient Components
import { PLayoutComponent } from './Pages/Patient/p-layout/p-layout.component';
import { PHomeComponent } from './Pages/Patient/p-home/p-home.component';
import { PAppointmentComponent } from './Pages/Patient/p-appointment/p-appointment.component';
import { PBlogComponent } from './Pages/Patient/p-blog/p-blog.component';
import { PChatComponent } from './Pages/Patient/p-chat/p-chat.component';
import { PContactUsComponent } from './Pages/Patient/p-contact-us/p-contact-us.component';
import { PNotificationComponent } from './Pages/Patient/p-notification/p-notification.component';
import { PProfileComponent } from './Pages/Patient/p-profile/p-profile.component';

// Admin Components
import { AdminLayoutComponent } from './Pages/Admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './Pages/Admin/user-management/user-management.component';
import { AppointmentsManagementComponent } from './Pages/Admin/appointments-management/appointments-management.component';
import { BlogModerationComponent } from './Pages/Admin/blog-moderation/blog-moderation.component';
import { PaymentsManagementComponent } from './Pages/Admin/payments-management/payments-management.component';
import { SettingsComponent } from './Pages/Admin/settings/settings.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'LHome',
    pathMatch: 'full',
  },
  // Landing Routes
  {
    path: '',
    component: LLayoutComponent,
    children: [
      { path: 'LHome', component: LHomeComponent },
      { path: 'LBlog', component: LBlogComponent },
      { path: 'LAbout', component: LAboutComponent },
      { path: 'LContact', component: LContactComponent },
      { path: 'LFAQ', component: FaqComponent },
      { path: 'logIn', component: LoginComponent }
    ]
  },
  // Patient Routes
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
      { path: 'PProfile', component: PProfileComponent }
    ]
  },
  // Doctor Routes
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
      { path: 'DProfile', component: DProfileComponent }
    ]
  },
  // Admin Routes (Protected)
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminAuthGuard],
    children: [
      { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      { 
        path: 'dashboard', 
        component: AdminDashboardComponent 
      },
      { path: 'users', component: UserManagementComponent },
      { path: 'appointments', component: AppointmentsManagementComponent },
      { path: 'blogs', component: BlogModerationComponent },
      { path: 'payments', component: PaymentsManagementComponent },
      { path: 'settings', component: SettingsComponent },
      // Ensure this is the last child route
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  // Global Fallback Route
  { path: '**', redirectTo: 'LHome' }
];