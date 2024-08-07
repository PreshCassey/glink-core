import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { Friend } from '../../models/friends.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'friends-featured',
  templateUrl: './friends-featured.component.html',
  styleUrls: ['./friends-featured.component.scss'],
})
export class FriendsFeaturedComponent implements OnInit {
  featuredFriends: Friend[] = [];

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getThreeFeaturedFriends().subscribe(friends => {
      this.featuredFriends = friends;
    });
  }
}
