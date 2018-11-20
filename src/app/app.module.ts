import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Http
import { Http, HttpModule } from '@angular/http';
//table
import { Ng2SmartTableModule } from 'ng2-smart-table';
// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Routing
import { routing } from './routing/app.routing';
// Service
import { AppService } from './services/app.service';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { DataProfileComponent } from './components/admin/data-profile/data-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    DataProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }