import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { up_seg_class } from './up_seg_class';
import { UpcomSegDataProvider } from '../../providers/upcom-seg-data/upcom-seg-data';

/**
 * Generated class for the UpSegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-up-seg',
  templateUrl: 'up-seg.html',
})
export class UpSegPage {
  ar:up_seg_class[]=[];
  email_id:string;
  name:string;
  date:string;
  venue:string;
  
  constructor(public _upseg:UpcomSegDataProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // this.email_id=localStorage.getItem("user_email");
    // alert(this.email_id);
    console.log('ionViewDidLoad UpSegPage');
    this._upseg.getUpSegment().subscribe(
      (dataa:up_seg_class[])=>{
        // this.name=dataa[0].e_name;
        // this.date=dataa[0].e_date;
        // this.venue=dataa[0].e_venue;
        this.ar=dataa;
      }
    );
  }

}
