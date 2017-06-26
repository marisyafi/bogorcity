import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Login } from '../login/login';
import { Kuliner } from '../kuliner/kuliner';
import { Hotel } from '../hotel/hotel';
import { Angkot } from '../angkot/angkot';
import { Wisata } from '../wisata/wisata'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    
  }

  seeLog(){
    this.navCtrl.push(Login);
   }
  seeKul(){
    this.navCtrl.push(Kuliner);
   }
  seeHot(){
    this.navCtrl.push(Hotel);
   }
  seeAng(){
    this.navCtrl.push(Angkot);
   }
  seeWis(){
    this.navCtrl.push(Wisata);
   }
}