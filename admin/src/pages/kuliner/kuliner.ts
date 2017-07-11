import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AddKuliner } from '../add-kuliner/add-kuliner';

@IonicPage()
@Component({
  selector: 'page-kuliner',
  templateUrl: 'kuliner.html',
})
export class Kuliner {
  kulinerList: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    this.kulinerList = db.list('/kuliners');
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
      harga1: kuliner.harga1,
      harga2: kuliner.harga2,
      jb: kuliner.jb,
      jt: kuliner.jt,
      foto: kuliner.foto
    });
  }

  deleteKul(kuliner) {
    this.kulinerList.remove(kuliner);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Kuliner');
  }

}
