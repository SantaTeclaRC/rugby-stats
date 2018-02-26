import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LineupPage } from '../lineup/lineup';
import { RefereesPage } from '../referees/referees';

import { Team } from '../../models/team';

@IonicPage()
@Component({
  selector: 'page-lineups',
  templateUrl: 'lineups.html',
})
export class LineupsPage {
  homeTeam: Team;
  awayTeam: Team;

  homeRoot = LineupPage;
  awayRoot = LineupPage;
  refereeRoot = RefereesPage;

  homeParams = { team: null }
  awayParams = { team: null }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homeTeam = this.navParams.get('home');
    this.awayTeam = this.navParams.get('away');

    this.homeParams.team = this.homeTeam
    this.awayParams.team = this.awayTeam
  }
}
