import { Component, OnInit } from '@angular/core';
import { Moment } from '../../models/user-moments.model';
import { UserMomentsService } from 'src/app/services/user-moments.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'user-moments-lg',
  templateUrl: './user-moments-lg.component.html',
  styleUrls: ['./user-moments-lg.component.scss'],
  imports: [CommonModule]
})
export class UserMomentsLgComponent implements OnInit {
  featuredUserMoments: Moment[] = [];

  constructor(
    private userMomentsService: UserMomentsService // Inject the service
  ) {}

  ngOnInit(): void {
    // Get five featured moments
    this.userMomentsService.getFiveFeaturedMoments().subscribe(moments => {
      this.featuredUserMoments = moments
    });
  }
}
