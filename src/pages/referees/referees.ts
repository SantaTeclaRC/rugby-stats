import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiveMatchPage } from '../live-match/live-match';
import { App } from 'ionic-angular/components/app/app';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-referees',
  templateUrl: 'referees.html',
})
export class RefereesPage {
  referees: Observable<any>;
  refereesList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App,
    afDatabase: AngularFireDatabase) {
    this.refereesList = afDatabase.list('/referees');
    this.referees = this.refereesList.valueChanges();
  }

  goToLiveMatch () {
    let nav = this.app.getRootNav()
    nav.push(LiveMatchPage);
  }
}
