import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() showRegister = new EventEmitter<void>();
  @Output() showForgotPassword = new EventEmitter<void>();

  renderRegister() {
    this.showRegister.emit();
  }

  renderForgot() {
    this.showForgotPassword.emit();
  }
}
