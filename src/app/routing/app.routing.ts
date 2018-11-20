import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guards';
import { AdminAuthGuard } from '../_guards/admin-auth.guards';
import { HttpModule, Http } from '@angular/http';

// Components
import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { ProfileComponent } from '../components/profile/profile.component';
// Admin
import { AdminComponent } from '../components/admin/admin.component';
import { AdminLoginComponent } from '../components/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from '../components/admin/admin-home/admin-home.component';
import { DataProfileComponent } from '../components/admin/data-profile/data-profile.component';

const appRoutes = [
  // for user
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // for admin
  { path: 'admin', component: AdminComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent, canActivate: [AdminAuthGuard] },
      { path: 'login', component: AdminLoginComponent },
      { path: 'profile/:id', component: DataProfileComponent },
    ] 
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'profile' }
];

export const routing = RouterModule.forRoot(appRoutes);