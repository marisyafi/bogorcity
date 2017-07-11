import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Kuliner } from '../pages/kuliner/kuliner';
import { Hotel } from '../pages/hotel/hotel';
import { Angkot } from '../pages/angkot/angkot';
import { Wisata } from '../pages/wisata/wisata';

var config = {
    apiKey: "AIzaSyBeHJwdcYvdLxpWmZSH2KBQfyNFSK0QV0Q",
    authDomain: "bogorcity-75a76.firebaseapp.com",
    databaseURL: "https://bogorcity-75a76.firebaseio.com",
    storageBucket: "bogorcity-75a76.appspot.com",
    messagingSenderId: "356176645058"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    About,
    Kuliner,
    Hotel,
    Angkot,
    Wisata,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    About,
    Kuliner,
    Hotel,
    Angkot,
    Wisata,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
