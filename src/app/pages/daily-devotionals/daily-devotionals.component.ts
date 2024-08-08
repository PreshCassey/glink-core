import { Component } from '@angular/core';


@Component({
  selector: 'app-daily-devotionals',
  templateUrl: './daily-devotionals.component.html',
  styleUrls: ['./daily-devotionals.component.scss']
})
export class DailyDevotionalsComponent {
  modalService: any;

  openDetails(open: any) {
    this.modalService.open(open, { scrollable: true, size: 's' });
  }
}

