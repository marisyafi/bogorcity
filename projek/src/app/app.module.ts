import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Kuliner } from '../pages/kuliner/kuliner';
import { Hotel } from '../pages/hotel/hotel';
import { Angkot } from '../pages/angkot/angkot';
import { Wisata } from '../pages/wisata/wisata';
import { AddKuliner } from '../pages/add-kuliner/add-kuliner';
import { AddHotel } from '../pages/add-hotel/add-hotel';
import { AddAngkot } from '../pages/add-angkot/add-angkot';
import { AddWisata } from '../pages/add-wisata/add-wisata';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Kuliner,
    Hotel,
    Angkot,
    Wisata,
    AddKuliner,
    AddHotel,
    AddAngkot,
    AddWisata
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Kuliner,
    Hotel,
    Angkot,
    Wisata,
    AddKuliner,
    AddHotel,
    AddAngkot,
    AddWisata
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyBeHJwdcYvdLxpWmZSH2KBQfyNFSK0QV0Q",
      authDomain: "bogorcity-75a76.firebaseapp.com",
      databaseURL: "https://bogorcity-75a76.firebaseio.com",
      storageBucket: "bogorcity-75a76.appspot.com"
    })
  ]
})
export class AppModule {}
