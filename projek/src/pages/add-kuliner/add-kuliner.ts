import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-add-kuliner',
  templateUrl: 'add-kuliner.html',
})
export class AddKuliner {

  kulinerList: FirebaseListObservable<any>;
  kuliner = {
    id: '',
    nama: '',
    alamat: '',
    kecamatan: '',
    telepon: '',
    jb: '',
    jt: ''
  };

  constructor(public navCtrl: NavController, public af: AngularFire, public params: NavParams) {
    this.kulinerList = af.database.list('/kuliners');
    this.kuliner.id = this.params.get('key');
    this.kuliner.nama = this.params.get('nama');
    this.kuliner.alamat = this.params.get('alamat');
    this.kuliner.kecamatan = this.params.get('kecamatan');
    this.kuliner.telepon = this.params.get('telepon');
    this.kuliner.jb = this.params.get('jb');
    this.kuliner.jt = this.params.get('jt');

  }

  addKul(id, nama, alamat, kecamatan, telepon, jb, jt){
    if(id){
      this.kulinerList.update(id, {
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon,
      jb: jb,
      jt: jt
    }).then( newKuliner => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  } else {
    this.kulinerList.push({
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon,
      jb: jb,
      jt: jt
    }).then( newKuliner => {
      this.navCtrl.pop();
    }, error => {
        console.log(error);
    });
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddKuliner');
  }

}