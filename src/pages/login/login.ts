import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Auth, IDetailedError } from '@ionic/cloud-angular';

import { Home } from '../home/home';
import { Register } from '../register/register';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  email:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}

  doLogin() {

  /*  if(this.email === null || this.password === null) {
      let alert = this.alertCtrl.create({
        title:'Login Error',
        subTitle:'Please insert your credentials.',
        buttons:['OK']
      });
      alert.present();
      return;
    }*/

    let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });
    loader.present();

    this.auth.login('basic', {'email': this.email, 'password': this.password}).then(() => {
      loader.dismissAll();
      this.navCtrl.setRoot(Home);
    }, (err: IDetailedError<string[]>) => {
      loader.dismissAll();
      let alert = this.alertCtrl.create({
        title: 'Login Error',
        subTitle: err.message,
        buttons: ['OK']
      });
      alert.present();
      });

  }

  goToRegisterPage() {
    this.navCtrl.setRoot(Register);
  }

}
