import { Component } from '@angular/core';
import { AuthService } from '../../services/auth'; // Servicio para manejar login/logout

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
