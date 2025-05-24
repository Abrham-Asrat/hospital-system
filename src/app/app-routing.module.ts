import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PProfileComponent } from './Pages/Patient/p-profile/p-profile.component';

const routes: Routes = [
  { path: 'profile', component: PProfileComponent },
  { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
