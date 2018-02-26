import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Team } from '../../models/team';

@IonicPage()
@Component({
  selector: 'page-lineup',
  templateUrl: 'lineup.html',
})
export class LineupPage {
  team: Team;
  playersQty;
  benchQty

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.get('team');
    this.playersQty = Array(7).fill(0, 0, 7).map((x, i) => i + 1);
    this.benchQty = Array(5).fill(0, 0, 5).map((x, i) => i + 1);
  }
}
