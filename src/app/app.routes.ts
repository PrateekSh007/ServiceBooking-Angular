import { Routes } from '@angular/router';
import { LoginComponent } from './basic/components/login/login.component';
import { SignupComponent } from './basic/components/signup/signup.component';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'register_client', component: SignupClientComponent },
  { path: '', redirectTo: '/register_client', pathMatch: 'full' }
];