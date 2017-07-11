import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-angkot',
  templateUrl: 'angkot.html',
})
export class Angkot {

  public angkotList:Array<any>;
  public loadedAngkotList:Array<any>;
  public angkotRef:firebase.database.Reference;
  
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    this.angkotRef = firebase.database().ref('/angkots');

    this.angkotRef.on('value', angkotList => {
      let angkots = [];
      angkotList.forEach( angkot => {
        angkots.push(angkot.val());
        return false;
      });

      this.angkotList = angkots;
      this.loadedAngkotList = angkots;
    });
  }


  initializeItems(){
    this.angkotList = this.loadedAngkotList;
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

    this.angkotList = this.angkotList.filter((v) => {
      if(v.rute && q) {
        if (v.rute.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.angkotList.length);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Angkot');
  }

}