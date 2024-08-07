import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { Group } from '../../models/groups.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'groups-featured',
  templateUrl: './groups-featured.component.html',
  styleUrls: ['./groups-featured.component.scss'],
  imports: [CommonModule]
})
export class GroupsFeaturedComponent implements OnInit {

  featuredGroups: Group[] = [];

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    // Get three featured groups
    this.groupsService.getThreeFeaturedGroups().subscribe(groups => {
      this.featuredGroups = groups

    });
  }



}
