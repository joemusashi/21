import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {TypewriterModule, TypewriterService} from 'ng2-typewriter'

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Philosophy } from '../pages/philosophy/philosophy';
import { Workshops } from '../pages/workshops/workshops';
import { PrivateLesson } from '../pages/privatelesson/privatelesson';
import { CollectiveLesson } from '../pages/collectivelesson/collectivelesson';
import { Birthday } from '../pages/birthday/birthday';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register'
import { Apply } from '../pages/apply/apply'


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e0102e3b'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Home,
    Dashboard,
    Philosophy,
    Workshops,
    PrivateLesson,
    CollectiveLesson,
    Birthday,
    Login,
    Register,
    Apply
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    TypewriterModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Dashboard,
    Philosophy,
    Workshops,
    PrivateLesson,
    CollectiveLesson,
    Birthday,
    Login,
    Register,
    Apply
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TypewriterService]
})
export class AppModule {}
