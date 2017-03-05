import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TypewriterService, TypewriterContent} from 'ng2-typewriter'

import { Philosophy } from '../philosophy/philosophy';
import { PrivateLesson } from '../privatelesson/privatelesson';
import { CollectiveLesson } from '../collectivelesson/collectivelesson';
import { Birthday } from '../birthday/birthday';
import { Register } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  hobbies: TypewriterContent[] = [];
  philosophy = Philosophy;
  privateLesson = PrivateLesson;
  collectiveLesson = CollectiveLesson;
  birthday = Birthday;
  register = Register;

  constructor(public navCtrl: NavController, private tws: TypewriterService) {
    this.hobbies = this.tws.format(['résoudre.', 'innover.', 's\'amuser.', 'déduire.', 'apprendre.', 'créer.', 'raisonner.', 'voyager.', 'expérimenter.', 'imaginer.', 'comprendre.', 'partager.'])
  }

}
