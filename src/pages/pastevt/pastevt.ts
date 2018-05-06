import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { past_seg_class } from './past_seg_class';
import { PastSegIdProvider } from '../../providers/past-seg-id/past-seg-id';
import { LoginPage } from '../login/login';
import { FeedbackProvider } from '../../providers/feedback/feedback';
import { feedbk } from './feedback_class';
import { past_mem } from './past_mem';
import { PastSegMemProvider } from '../../providers/past-seg-mem/past-seg-mem';

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
  email:string;
  id:number;
  desc:string;
  fbk:feedbk;
  f:feedbk[]=[];
  f_id:number;
  arr:past_mem[]=[];
  constructor(public feedbk:FeedbackProvider,
    public past_member:PastSegMemProvider,
    public _past_data:PastSegIdProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.id=this.navParams.get('id');
    console.log(this.id);
    console.log('ionViewDidLoad PastevtPage');
    this.email=localStorage.getItem("user_email");
    this._past_data.getUpPastById(this.id).subscribe(
      (data:past_seg_class[])=>{
        console.log(this.ar);
        this.ar=data;
      }
    );

    this.past_member.getPastMemb(this.id).subscribe(
      (dt:past_mem[])=>{
        this.arr=dt;
        console.log("people:"+this.arr);
      }
    );

    this.feedbk.getFeedbackById(this.id).subscribe(
        (dt:feedbk[])=>{
          this.f=dt;
        }    
      );
  }

  add(){
    this.fbk=new feedbk(null,this.desc,this.id,this.email);
    this.feedbk.addFeedback(this.fbk).subscribe(
      (date:any)=>{
        console.log(this.f_id);
      }
    );
  }
    logout(){
      this.navCtrl.parent.parent.setRoot(LoginPage);
    }
}
