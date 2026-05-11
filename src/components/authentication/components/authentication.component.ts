import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'app-authentication',
  imports: [CommonModule, LoginComponent, RegistrationComponent, ForgotPasswordComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  currentView: 'login' | 'register' | 'forgot' = 'login';

  showLogin() {
    this.currentView = 'login';
  }

  showRegister() {
    this.currentView = 'register';
  }

  showForgotPassword() {
    this.currentView = 'forgot';
  }
}
