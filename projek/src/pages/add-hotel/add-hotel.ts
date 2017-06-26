import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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
    telepon: ''
  };

  constructor(public navCtrl: NavController, public af: AngularFire, public params: NavParams) {
    this.hotelList = af.database.list('/hotels');
    this.hotel.id = this.params.get('key');
    this.hotel.nama = this.params.get('nama');
    this.hotel.alamat = this.params.get('alamat');
    this.hotel.kecamatan = this.params.get('kecamatan');
    this.hotel.telepon = this.params.get('telepon');
  }

  addKul(id, nama, alamat, kecamatan, telepon){
    if(id){
      this.hotelList.update(id, {
      nama: nama,
      alamat: alamat,
      kecamatan: kecamatan,
      telepon: telepon
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
      telepon: telepon
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
