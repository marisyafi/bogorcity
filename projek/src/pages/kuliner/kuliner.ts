import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AddKuliner } from '../add-kuliner/add-kuliner';

@IonicPage()
@Component({
  selector: 'page-kuliner',
  templateUrl: 'kuliner.html',
})
export class Kuliner {

  kulinerList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.kulinerList = af.database.list('/kuliners');
  }

  addKul(){
    this.navCtrl.push(AddKuliner);
   }

  editKul(kuliner){
    this.navCtrl.push(AddKuliner, {
      key: kuliner.$key,
      nama: kuliner.nama,
      alamat: kuliner.alamat,
      kecamatan: kuliner.kecamatan,
      telepon: kuliner.telepon,
      jb: kuliner.jb,
      jt: kuliner.jt
    });
  }

  deleteKul(kuliner) {
    this.kulinerList.remove(kuliner);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Kuliner');
  }

}
