import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';


@Component({
  standalone: true,
  selector: 'mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class MobileNavbarComponent implements OnInit {
  ios!: boolean;

  constructor(
    public config: Config
  ) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
  }

}
