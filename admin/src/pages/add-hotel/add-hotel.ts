import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-add-hotel',
  templateUrl: 'add-hotel.html',
})
export class AddHotel {
  hotelList: FirebaseListObservable<any>;
  hotel = {
    id: '',
    nama: '',
    alamat: '',
    kecamatan: '',
    telepon: '',
    harga1: '',
    harga2: '',
    a: '',
    p: '',
    w: '',
    r: '',
    foto: null
  };

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public cameraPlugin: Camera, public params: NavParams) {
    this.hotelList = db.list('/hotels');
    this.hotel.id = this.params.get('key');
    this.hotel.nama = this.params.get('nama');
    this.hotel.alamat = this.params.get('alamat');
    this.hotel.kecamatan = this.params.get('kecamatan');
    this.hotel.telepon = this.params.get('telepon');
    this.hotel.harga1 = this.params.get('harga1');
    this.hotel.harga2 = this.params.get('harga2');
    this.hotel.a = this.params.get('a');
    this.hotel.p = this.params.get('p');
    this.hotel.w = this.params.get('w');
    this.hotel.r = this.params.get('r');
    this.hotel.foto = this.params.get('foto');
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
      this.hotel.foto = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  addHot(id, nama, alamat, kecamatan, telepon, harga1, harga2, a, p, w, r, foto){
    if(id){
      this.hotelList.update(id, {
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon,
      harga1: harga1,
      harga2: harga2,
      a: a,
      p: p,
      w: w,
      r: r,
      foto: foto
    }).then( newHotel => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  } else {
    this.hotelList.push({
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon,
      harga1: harga1,
      harga2: harga2,
      a: a,
      p: p,
      w: w,
      r: r,
      foto: foto
    }).then( newHotel => {
      this.navCtrl.pop();
    }, error => {
        console.log(error);
    });
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHotel');
  }

}
