import { Component, Input, OnInit } from '@angular/core';
import { Moment } from '../../models/user-moments.model';
import { UserMomentsService } from '../../services/user-moments.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'user-moments',
  templateUrl: './user-moments.component.html',
  styleUrls: ['./user-moments.component.scss'],
  imports: [ CommonModule ]
})
export class UserMomentsComponent implements OnInit {
  @Input() userMoments: Moment[] = [];

  // Pagination properties
  pageSize: number = 5;
  currentPage: number = 1;

  // Keep track of the translation value
  currentTranslateX: number = 0;

  momentWidth: number = 150; // Adjust this based on your moment card width

  constructor(
    private userMomentsService: UserMomentsService // Inject the service
  ) {}

  ngOnInit(): void {
    // Get all moments
    this.userMomentsService.getAllMoments().subscribe((moments) => {
      this.userMoments = moments;
    });


  }

  getDisplayedMoments(): Moment[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.userMoments.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      // this.updateTranslation();
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.userMoments.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      // this.updateTranslation();
    }
  }

  updateTranslation() {
    const totalMoments = this.userMoments.length;
    const totalWidth = this.momentWidth * totalMoments;
    const containerWidth = this.pageSize * this.momentWidth;
    const maxTranslateX = totalWidth - containerWidth;

    this.currentTranslateX = -((this.currentPage - 1) * this.momentWidth);
    if (this.currentTranslateX < -maxTranslateX) {
      this.currentTranslateX = -maxTranslateX;
    }
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  hasNextPage(): boolean {
    return (
      this.currentPage < Math.ceil(this.userMoments.length / this.pageSize)
    );
  }
}
