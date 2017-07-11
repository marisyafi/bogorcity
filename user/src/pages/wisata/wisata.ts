import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-wisata',
  templateUrl: 'wisata.html',
})
export class Wisata {

  public wisataList:Array<any>;
  public loadedWisataList:Array<any>;
  public wisataRef:firebase.database.Reference;
  
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    this.wisataRef = firebase.database().ref('/wisatas');

    this.wisataRef.on('value', wisataList => {
      let wisatas = [];
      wisataList.forEach( wisata => {
        wisatas.push(wisata.val());
        return false;
      });

      this.wisataList = wisatas;
      this.loadedWisataList = wisatas;
    });
  }


  initializeItems(){
    this.wisataList = this.loadedWisataList;
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

    this.wisataList = this.wisataList.filter((v) => {
      if(v.nama && q) {
        if (v.nama.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.wisataList.length);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Wisata');
  }

}
