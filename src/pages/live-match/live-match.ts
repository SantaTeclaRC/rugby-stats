import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../../components/timer/timer';

@IonicPage()
@Component({
  selector: 'page-live-match',
  templateUrl: 'live-match.html',
})
export class LiveMatchPage {

  @ViewChild(TimerComponent) timer: TimerComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }

}
