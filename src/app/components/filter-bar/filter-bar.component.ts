
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/constants';

@Component({
  standalone: true,
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  imports: [CommonModule]
})
export class FilterBarComponent {
  // Define the filter options based on the user experience
  filterCategory: string[] = CATEGORIES;
  @Input() selectedFilterCategory: string = 'All'; // Set default value to 'All'
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  applyFilter(filterCategory: string) {
    this.filterChanged.emit(filterCategory);
  }
}
