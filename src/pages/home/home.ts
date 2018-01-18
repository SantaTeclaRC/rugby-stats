import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LineupsPage } from '../lineups/lineups';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLineups() {
    this.navCtrl.push(LineupsPage);
  }

}
