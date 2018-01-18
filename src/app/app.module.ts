import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LineupsPage } from '../pages/lineups/lineups';
import { LineupPage } from '../pages/lineup/lineup';
import { RefereesPage } from '../pages/referees/referees';
import { LiveMatchPage } from '../pages/live-match/live-match';
import { TimerComponent } from '../components/timer/timer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LineupsPage,
    LineupPage,
    RefereesPage,
    LiveMatchPage,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LineupsPage,
    LineupPage,
    RefereesPage,
    LiveMatchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
