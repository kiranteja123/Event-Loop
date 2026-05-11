import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  @Output() showLogin = new EventEmitter<void>();

  renderLogin() {
    this.showLogin.emit();
  }
}
