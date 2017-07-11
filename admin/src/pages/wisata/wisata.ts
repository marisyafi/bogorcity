import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AddWisata } from '../add-wisata/add-wisata';

@IonicPage()
@Component({
  selector: 'page-wisata',
  templateUrl: 'wisata.html',
})
export class Wisata {

  wisataList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    this.wisataList = db.list('/wisatas');
  }

  addWis(){
    this.navCtrl.push(AddWisata);
   }

  editWis(wisata){
    this.navCtrl.push(AddWisata, {
      key: wisata.$key,
      nama: wisata.nama,
      alamat: wisata.alamat,
      kecamatan: wisata.kecamatan,
      telepon: wisata.telepon,
      jb: wisata.jb,
      jt: wisata.jt,
      ht: wisata.ht,
      foto: wisata.foto
    });
  }

  deleteWis(wisata) {
    this.wisataList.remove(wisata);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Wisata');
  }

}
