import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-add-wisata',
  templateUrl: 'add-wisata.html',
})
export class AddWisata {

  wisataList: FirebaseListObservable<any>;
  wisata = {
    id: '',
    nama: '',
    alamat: '',
    kecamatan: '',
    telepon: '',
    jb: '',
    jt: '',
    ht: ''
  };
  
  constructor(public navCtrl: NavController, public af: AngularFire, public params: NavParams) {
    this.wisataList = af.database.list('/wisatas');
    this.wisata.id = this.params.get('key');
    this.wisata.nama = this.params.get('nama');
    this.wisata.alamat = this.params.get('alamat');
    this.wisata.kecamatan = this.params.get('kecamatan');
    this.wisata.telepon = this.params.get('telepon');
    this.wisata.jb = this.params.get('jb');
    this.wisata.jt = this.params.get('jt');
    this.wisata.ht = this.params.get('ht');
  }

  addWis(id, nama, alamat, kecamatan, telepon, jb, jt, ht){
    if(id){
      this.wisataList.update(id, {
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon,
      jb: jb,
      jt: jt,
      ht: ht
    }).then( newWisata => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  } else {
    this.wisataList.push({
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon,
      jb: jb,
      jt: jt,
      ht: ht
    }).then( newWisata => {
      this.navCtrl.pop();
    }, error => {
        console.log(error);
    });
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWisata');
  }

}