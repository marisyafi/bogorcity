import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';

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
    ht: '',
    foto: null
  };
  
  constructor(public navCtrl: NavController, public cameraPlugin: Camera, db: AngularFireDatabase, public params: NavParams) {
    this.wisataList = db.list('/wisatas');
    this.wisata.id = this.params.get('key');
    this.wisata.nama = this.params.get('nama');
    this.wisata.alamat = this.params.get('alamat');
    this.wisata.kecamatan = this.params.get('kecamatan');
    this.wisata.telepon = this.params.get('telepon');
    this.wisata.jb = this.params.get('jb');
    this.wisata.jt = this.params.get('jt');
    this.wisata.ht = this.params.get('ht');
    this.wisata.foto = this.params.get('foto');
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
      this.wisata.foto = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  addWis(id, nama, alamat, kecamatan, telepon, jb, jt, ht, foto){
    if(id){
      this.wisataList.update(id, {
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon,
      jb: jb,
      jt: jt,
      ht: ht,
      foto: foto
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
      ht: ht,
      foto: foto
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