import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';

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
    harga1: '',
    harga2: '',
    jb: '',
    jt: '',
    foto: null
  };

  constructor(public navCtrl: NavController, public cameraPlugin: Camera, db: AngularFireDatabase, public params: NavParams) {
    this.kulinerList = db.list('/kuliners');
    this.kuliner.id = this.params.get('key');
    this.kuliner.nama = this.params.get('nama');
    this.kuliner.alamat = this.params.get('alamat');
    this.kuliner.kecamatan = this.params.get('kecamatan');
    this.kuliner.telepon = this.params.get('telepon');
    this.kuliner.harga1 = this.params.get('harga1');
    this.kuliner.harga2 = this.params.get('harga2');
    this.kuliner.jb = this.params.get('jb');
    this.kuliner.jt = this.params.get('jt');
    this.kuliner.foto = this.params.get('foto');
  }

  takePicture(){
    this.cameraPlugin.getPicture({
      quality : 95,
      destinationType : this.cameraPlugin.DestinationType.DATA_URL,
      sourceType : 0,
      allowEdit : true,
      encodingType: this.cameraPlugin.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 250
    }).then(imageData => {
      this.kuliner.foto = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  addKul(id, nama, alamat, kecamatan, telepon, harga1, harga2, jb, jt, foto){
    if(id){
      this.kulinerList.update(id, {
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon,
      harga1: harga1,
      harga2: harga2,
      jb: jb,
      jt: jt,
      foto: foto
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
      harga1: harga1,
      harga2: harga2,
      jb: jb,
      jt: jt,
      foto: foto
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