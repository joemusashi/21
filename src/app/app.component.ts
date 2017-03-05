import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Auth } from '@ionic/cloud-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Philosophy } from '../pages/philosophy/philosophy';
import { Workshops } from '../pages/workshops/workshops';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Apply } from '../pages/apply/apply';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public auth: Auth) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: Home },
      { title: 'Tableau de bord', component: Dashboard },
      { title: 'La philosophie', component: Philosophy },
      { title: 'Les ateliers', component: Workshops },
      { title: 'Inscrire mon enfant', component: Register },
      { title: 'Postuler', component: Apply },
      { title: 'Se connecter', component: Login }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString('#ffffff');
      Splashscreen.hide();

      if(this.auth.isAuthenticated()) {
        this.rootPage = Home;
      } else {
        //this.rootPage = LoginPage;
        this.rootPage = Home;
      }

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.auth.logout();
    this.nav.setRoot(Login);
  }
}
