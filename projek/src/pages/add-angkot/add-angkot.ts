import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-add-angkot',
  templateUrl: 'add-angkot.html',
})
export class AddAngkot {

  angkotList: FirebaseListObservable<any>;
  angkot = {
    id: '',
    nama: '',
    trayek: '',
    warna: '',
    rute: ''
  };

  constructor(public navCtrl: NavController, public af: AngularFire, public params: NavParams) {
    this.angkotList = af.database.list('/angkots');
    this.angkot.id = this.params.get('key');
    this.angkot.nama = this.params.get('nama');
    this.angkot.trayek = this.params.get('trayek');
    this.angkot.warna = this.params.get('warna');
    this.angkot.rute = this.params.get('rute');

  }

  addAng(id, nama, trayek, warna, rute){
    if(id){
      this.angkotList.update(id, {
      nama: nama,
      trayek: trayek,
      warna: warna,
      rute: rute
    }).then( newAngkot => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  } else {
    this.angkotList.push({
      nama: nama,
      trayek: trayek,
      warna: warna,
      rute: rute
    }).then( newAngkot => {
      this.navCtrl.pop();
    }, error => {
        console.log(error);
    });
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAngkot');
  }

}
