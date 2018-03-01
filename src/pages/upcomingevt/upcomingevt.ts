import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { upcomm_class } from './upcom_class';
import { UpcommSegDataProvider } from '../../providers/upcomm-page-data/upcomm-page-data';


/**
 * Generated class for the UpcomingevtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcomingevt',
  templateUrl: 'upcomingevt.html',
})
export class UpcomingevtPage {
  ar:upcomm_class[]=[];

  constructor(public _upseg_data: UpcommSegDataProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingevtPage');
    this._upseg_data.getUpPage().subscribe(
      (data:upcomm_class[])=>{
        this.ar=data;
      }
    );
  }

}
