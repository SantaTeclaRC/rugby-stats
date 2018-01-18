import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LineupPage } from '../lineup/lineup';
import { RefereesPage } from '../referees/referees';

@IonicPage()
@Component({
  selector: 'page-lineups',
  templateUrl: 'lineups.html',
})
export class LineupsPage {

  localRoot = LineupPage;
  visitRoot = LineupPage;
  refereeRoot = RefereesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
