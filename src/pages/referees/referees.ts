import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiveMatchPage } from '../live-match/live-match';
import { App } from 'ionic-angular/components/app/app';

@IonicPage()
@Component({
  selector: 'page-referees',
  templateUrl: 'referees.html',
})
export class RefereesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  goToLiveMatch () {
    let nav = this.app.getRootNav()
    nav.push(LiveMatchPage);
  }

}
