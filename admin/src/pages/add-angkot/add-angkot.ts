import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';

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
    rute: '',
    foto: null
  };

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public cameraPlugin: Camera, public params: NavParams) {
    this.angkotList = db.list('/angkots');
    this.angkot.id = this.params.get('key');
    this.angkot.nama = this.params.get('nama');
    this.angkot.trayek = this.params.get('trayek');
    this.angkot.warna = this.params.get('warna');
    this.angkot.rute = this.params.get('rute');
    this.angkot.foto = this.params.get('foto');
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
      this.angkot.foto = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  addAng(id, nama, trayek, warna, rute, foto){
    if(id){
      this.angkotList.update(id, {
      nama: nama,
      trayek: trayek,
      warna: warna,
      rute: rute,
      foto: foto
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
      rute: rute,
      foto: foto
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
