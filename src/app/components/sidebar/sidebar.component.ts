import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventLgComponent } from '../event-lg/event-lg.component';
import { UserMomentsComponent } from '../user-moments/user-moments.component';
import { UserMomentsLgComponent } from '../user-moments-lg/user-moments-lg.component';
import { GroupsFeaturedComponent } from '../groups-featured/groups-featured.component';
import { FriendsFeaturedComponent } from '../friends-featured/friends-featured.component';
import { HymnLibraryFeaturedComponent } from '../hymn-library-featured/hymn-library-featured.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, EventLgComponent, UserMomentsComponent, UserMomentsLgComponent, GroupsFeaturedComponent, FriendsFeaturedComponent, HymnLibraryFeaturedComponent, RouterModule]
})
export class SidebarComponent {
  constructor() {}
}
