import { Component, OnInit } from '@angular/core';
import { HymnLibraryService } from '../../services/hymn-library.service';
import { Hymn } from '../../models/hymn-library.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'hymn-library-featured',
  templateUrl: './hymn-library-featured.component.html',
  styleUrls: ['./hymn-library-featured.component.scss'],
  imports: [CommonModule]
})
export class HymnLibraryFeaturedComponent implements OnInit {
  featuredHymns: Hymn[] = [];

  constructor(private hymnLibraryService: HymnLibraryService)
  {

  }

  ngOnInit(): void {
    this.hymnLibraryService.getThreeFeaturedHymns().subscribe(hymns => {
      this.featuredHymns = hymns;

    });
  }
}
