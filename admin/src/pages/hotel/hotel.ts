import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AddHotel } from '../add-hotel/add-hotel';

@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class Hotel {
  hotelList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    this.hotelList = db.list('/hotels');
  }
  
  addHot(){
    this.navCtrl.push(AddHotel);
   }

  editHot(hotel){
    this.navCtrl.push(AddHotel, {
      key: hotel.$key,
      nama: hotel.nama,
      alamat: hotel.alamat,
      kecamatan: hotel.kecamatan,
      telepon: hotel.telepon,
      harga1: hotel.harga1,
      harga2: hotel.harga2,
      a: hotel.a,
      p: hotel.p,
      w: hotel.w,
      r: hotel.r,
      foto: hotel.foto
    });
  }

  deleteHot(hotel) {
    this.hotelList.remove(hotel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotel');
  }

}
