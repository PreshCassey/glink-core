import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class VerticalNavbarComponent {
  // Variable to track whether the vertical navbar should be displayed
  showVerticalNavbar = false;

  // Media query for laptops, desktops, and large screens (min-width: 992px)
  private mediaQuery = window.matchMedia('(min-width: 992px)');

  // Dark mode state
  darkMode: boolean = false;
  constructor(private router: Router) {
    // Initially, check the screen width on component initialization
    this.checkScreenWidth();
  }

  // Listen for window resize events to update the visibility of the vertical navbar
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    // Check if the screen width matches the media query
    if (this.mediaQuery.matches) {
      this.showVerticalNavbar = true;
    } else {
      this.showVerticalNavbar = false;
    }
  }

  // Dark mode toggle
  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    // Apply dark mode theme to the whole website
    // Add a class to the root element to apply the dark mode styles
    const rootElement = document.querySelector('.root');
    if (this.darkMode) {
      rootElement?.classList.add('dark-mode');
    } else {
      rootElement?.classList.remove('dark-mode');
    }
    // Save user preference to local storage or a cookie for persistence
    localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
  }

  // Method to check if the given page is the current page
  isCurrentPage(page: string): boolean {
    return this.router.isActive('/' + page, false);
  }

  // Logout functionality
  logout() {
    // Perform logout logic here, e.g., clear authentication tokens, navigate to login page, etc.
    // For simplicity, we'll just navigate to the login page
    this.router.navigate(['/login']);
  }
}
