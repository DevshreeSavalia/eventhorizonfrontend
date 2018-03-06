import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PastevtPage } from '../pastevt/pastevt';
import { UpSegPage } from '../up-seg/up-seg';
//import { comm_class } from './comm_class';

/**
 * Generated class for the CommNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comm-name',
  templateUrl: 'comm-name.html',
})
export class CommNamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommNamePage');
  }

  up(){
    this.navCtrl.push(UpSegPage);
  }

  past(){
    this.navCtrl.push(PastevtPage);
  }
}
