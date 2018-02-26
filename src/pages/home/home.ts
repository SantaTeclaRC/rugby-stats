import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LineupsPage } from '../lineups/lineups';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Team } from '../../models/team';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  teams: Observable<any>;
  teamsList: AngularFireList<Team>;

  home: Team = null;
  away: Team = null;

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) {
    this.teamsList = afDatabase.list('/teams');
    this.teams = this.teamsList.valueChanges();
  }

  canStart() { return (this.home && this.away) && (this.home !== this.away); }

  goToLineups() { this.navCtrl.push(LineupsPage, { home: this.home, away: this.away }); }
}
