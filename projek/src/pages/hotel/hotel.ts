import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AddHotel } from '../add-hotel/add-hotel';

@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class Hotel {
	
  hotelList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
  	this.hotelList = af.database.list('/hotels');
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
    });
  }

  deleteHot(hotel) {
    this.hotelList.remove(hotel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotel');
  }

}
