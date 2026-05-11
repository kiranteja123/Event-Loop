import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  imports: [CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  @Output() showLogin = new EventEmitter<void>();

  renderLogin() {
    this.showLogin.emit();
  }
}
