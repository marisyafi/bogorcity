import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {
  loginDataList: FirebaseListObservable<any>;
  loginData = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, db: AngularFireDatabase, private afAuth: AngularFireAuth, private toastCtrl: ToastController, public params: NavParams) {
  	this.loginDataList = db.list('/loginDatas');
    this.loginData.email = this.params.get('email');
    this.loginData.password = this.params.get('password');
  }
  
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      // Do custom things with auth
    })
    .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 1000
      });
      toast.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}