import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { past_seg_class } from './past_seg_class';
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
  ar:past_seg_class[]=[];
  email_id:string;
  name:string;
  date:string;
  venue:string;
  constructor(public _past_data:PastSegDataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // this.email_id=localStorage.getItem("user_email"); 
    // alert(this.email_id);
    console.log('ionViewDidLoad PastevtPage');
    this._past_data.getPastSegment().subscribe(
      (data:past_seg_class[])=>{
        console.log(this.ar=data);
        // this.name=data[0].e_name;
        // this.date=data[0].e_date;
        // this.venue=data[0].e_venue;
        this.ar=data;
      }
    );
    
}

}
