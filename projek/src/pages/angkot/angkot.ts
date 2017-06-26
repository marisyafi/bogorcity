import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AddAngkot } from '../add-angkot/add-angkot';

@IonicPage()
@Component({
  selector: 'page-angkot',
  templateUrl: 'angkot.html',
})
export class Angkot {

  angkotList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.angkotList = af.database.list('/angkots');
  }

  addAng(){
    this.navCtrl.push(AddAngkot);
   }

  editAng(angkot){
    this.navCtrl.push(AddAngkot, {
      key: angkot.$key,
      nama: angkot.nama,
      trayek: angkot.trayek,
      warna: angkot.warna,
      rute: angkot.rute
    });
  }

  deleteAng(angkot) {
    this.angkotList.remove(angkot);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Angkot');
  }

}