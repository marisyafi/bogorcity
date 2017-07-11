import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-kuliner',
  templateUrl: 'kuliner.html',
})
export class Kuliner {
  public kulinerList:Array<any>;
  public loadedKulinerList:Array<any>;
  public kulinerRef:firebase.database.Reference;
  
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) {
    this.kulinerRef = firebase.database().ref('/kuliners');

    this.kulinerRef.on('value', kulinerList => {
      let kuliners = [];
      kulinerList.forEach( kuliner => {
        kuliners.push(kuliner.val());
        return false;
      });

      this.kulinerList = kuliners;
      this.loadedKulinerList = kuliners;
    });
  }


  initializeItems(){
    this.kulinerList = this.loadedKulinerList;
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

    this.kulinerList = this.kulinerList.filter((v) => {
      if(v.nama && q) {
        if (v.nama.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.kulinerList.length);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Kuliner');
  }

}
