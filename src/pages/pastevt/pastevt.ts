import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { upcomm_class } from '../upcomingevt/upcom_class';
import { PastSegDataProvider } from '../../providers/past-seg-data/past-seg-data';
/**
 * Generated class for the PastevtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pastevt',
  templateUrl: 'pastevt.html',
})
export class PastevtPage {
  ar:upcomm_class[]=[];
  constructor(public _past_data:PastSegDataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastevtPage');
    this._past_data.getPastSegment().subscribe(
      (data:upcomm_class[])=>{
        this.ar=data;
      }
    );
    
}

}
