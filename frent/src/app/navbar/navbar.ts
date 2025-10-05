import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  isAuthenticated = false;
  user: any = null;
    isMenuOpen = false;

      constructor(
    private authService: AuthService,
  ) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
    ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
      }
    );

    this.authService.user$.subscribe(
      (user) => {
        this.user = user;
      }
    );
  }  
  logout(): void {
    this.authService.logout();
  }
}
