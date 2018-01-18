import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LineupPage } from '../lineup/lineup';

@IonicPage()
@Component({
  selector: 'page-lineups',
  templateUrl: 'lineups.html',
})
export class LineupsPage {

  localRoot = LineupPage;
  visitRoot = LineupPage;
  refereeRoot = LineupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
