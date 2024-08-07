import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  EventEmitter, Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  standalone: true,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, FormsModule, CollapseModule, SearchBarComponent, FilterBarComponent, RouterModule]
})
export class NavbarComponent implements OnInit {
  isNavCollapsed: boolean = true;
  showFilterOverlay: boolean = false;
  showSearchOverlay: boolean = false;

  // Dark mode state
  darkMode: boolean = false;

  // Declare the Output EventEmitter to communicate with HomeComponent
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchQueryChanged: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Method to check if the given page is the current page
  isCurrentPage(page: string): boolean {
    return this.router.isActive('/' + page, false);
  }

  showFilterOptions() {
    this.showFilterOverlay = !this.showFilterOverlay;
    if (this.showSearchOverlay) {
      this.showSearchOverlay = false;
    }
  }

  showSearchBar() {
    this.showSearchOverlay = !this.showSearchOverlay;
    if (this.showFilterOverlay) {
      this.showFilterOverlay = false;
    }
  }

  // Move the applyFilter method here
  applyFilter(filter: string) {
    this.showFilterOverlay = false; // Hide the filter overlay
    this.filterChanged.emit(filter); // Emit the selected filter to HomeComponent
  }

  // Move the applySearch method here
  applySearch(query: string) {
    this.showSearchOverlay = false; // Hide the search overlay
    this.searchQueryChanged.emit(query); // Emit the search query to HomeComponent
  }

  // Remove search overlay on clicking search button
  onCancelSearch() {
    this.showSearchOverlay = false;
  }

  // Dark mode toggle
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    // Apply dark mode theme to the whole website
    // You can use a library like ng-bootstrap or ngx-bootstrap to handle theme changes
    // Here, we'll just add a class to the root element to apply the dark mode styles
    const rootElement = document.querySelector('.root');
    if (this.darkMode) {
      rootElement?.classList.add('dark-mode');
    } else {
      rootElement?.classList.remove('dark-mode');
    }
    // Save user preference to local storage or a cookie for persistence
    localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
  }

  // Method to toggle dark mode
  // toggleDarkMode() {
  //   this.darkMode = !this.darkMode;

  //   // Apply dark mode theme to the whole website
  //   // Add the class 'dark-mode' to the body element when dark mode is enabled
  //   document.body.classList.toggle('dark-mode', this.darkMode);

  //   // Save user preference to local storage or a cookie for persistence
  //   localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
  // }

  // Logout functionality
  logout() {
    // Perform logout logic here, e.g., clear authentication tokens, navigate to login page, etc.
    // For simplicity, we'll just navigate to the login page
    this.router.navigate(['/login']);
  }

  // Handle both collapsing and logout
  handleCollapseAndLogout() {
    this.isNavCollapsed = true; // Collapse the navbar
    this.logout(); // Logout
  }
}
