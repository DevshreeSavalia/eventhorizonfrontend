import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { mem_class } from './member_class';
import { MemberDataProvider } from '../../providers/member-seg-data/member-seg-data';
import { LoginPage } from '../login/login';
/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {
  ar:mem_class[]=[];
  name:string;
  date:string;
  venue:string;
  id:number;
  constructor(public _memdata:MemberDataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.id=this.navParams.get('id'); 
    alert(this.id);
    console.log('ionViewDidLoad MemberPage');
    this._memdata.getMembSegment(this.id).subscribe(
      (data:mem_class[])=>{
        console.log(this.ar);
        // this.name=data[0].e_name;
        // this.date=data[0].e_date;
        // this.venue=data[0].e_venue;
        this.ar=data;
      }
    );
    
  }
 logout(){
  this.navCtrl.parent.parent.setRoot(LoginPage);
}
}
