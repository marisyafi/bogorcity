import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class Hotel {
  public hotelList:Array<any>;
  public loadedHotelList:Array<any>;
  public hotelRef:firebase.database.Reference;
  
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    this.hotelRef = firebase.database().ref('/hotels');

    this.hotelRef.on('value', hotelList => {
      let hotels = [];
      hotelList.forEach( hotel => {
        hotels.push(hotel.val());
        return false;
      });

      this.hotelList = hotels;
      this.loadedHotelList = hotels;
    });
  }


  initializeItems(){
    this.hotelList = this.loadedHotelList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.hotelList = this.hotelList.filter((v) => {
      if(v.nama && q) {
        if (v.nama.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.hotelList.length);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotel');
  }

}
