import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Auth, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { Home } from '../home/home';
import { Login } from '../login/login';


/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html'
})
export class Apply {

  email:string;
  password:string;
  name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}

  doRegister() {

    let details: UserDetails = {
      'name': this.name,
      'email': this.email,
      'password': this.password
    };

    let loader = this.loadingCtrl.create({
      content: "Registering your account..."
    });
    loader.present();

    this.auth.signup(details).then(() => {
      // `this.user` is now registered
      loader.dismissAll();
      return this.auth.login('basic', details).then(() => {
          loader.dismissAll();
          this.navCtrl.setRoot(Home);
        });
    }, (err: IDetailedError<string[]>) => {
      let errorMessage:string = '';
      for (let e of err.details) {
        if (e === 'required_email') {
          errorMessage = 'Your email is required for registration.';
        } else if (e === 'required_password') {
          errorMessage = 'Your password is required for registration.';
        } else if (e === 'conflict_email') {
          errorMessage = 'A user has already signed up with the supplied email.';
        } else if (e === 'conflict_username') {
          errorMessage = 'A user has already signed up with the supplied username.';
        } else if (e === 'invalid_email') {
          errorMessage = 'The email you entered is not valid.';
        } else {
          errorMessage = 'The signup failed with an unknown error.';
        }
        loader.dismissAll();
        let alert = this.alertCtrl.create({
          title: 'Signup Error',
          subTitle: errorMessage,
          buttons: ['OK']
        });
        alert.present();
      }
    });

  }

  goToLoginPage() {
    this.navCtrl.setRoot(Login);
  }

}
