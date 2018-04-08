import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { past_seg_class } from './past_seg_class';
import { PastSegDataProvider } from '../../providers/past-seg-data/past-seg-data';
import { LoginPage } from '../login/login';

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
  ar:past_seg_class[]=[];
  email_id:string;
  id:number;
  constructor(public _past_data:PastSegDataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.id=this.navParams.get('id');
    console.log('ionViewDidLoad PastevtPage');
    this._past_data.getPastSegment(this.id).subscribe(
      (data:past_seg_class[])=>{
        console.log(this.ar);
        this.ar=data;
      }
    );
  }
    logout(){
      this.navCtrl.parent.parent.setRoot(LoginPage);
    }
}
