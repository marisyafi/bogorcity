import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AddAngkot } from '../add-angkot/add-angkot';

@IonicPage()
@Component({
  selector: 'page-angkot',
  templateUrl: 'angkot.html',
})
export class Angkot {

  angkotList: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    this.angkotList = db.list('/angkots');
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
      rute: angkot.rute,
      foto: angkot.foto
    });
  }

  deleteAng(angkot) {
    this.angkotList.remove(angkot);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Angkot');
  }

}