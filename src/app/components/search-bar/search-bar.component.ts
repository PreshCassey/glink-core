import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class SearchBarComponent {
  searchQuery: string = '';
  showSearchOverlay: boolean = false;

  // Create a custom event with the search query as the payload
  @Output() searchQueryChanged: EventEmitter<string> =
    new EventEmitter<string>();

  // Method to emit the search query when the user presses Enter
  emitSearchQuery() {
    this.searchQueryChanged.emit(this.searchQuery);
    this.showSearchOverlay = false; // Close the search bar overlay after search
  }
}
