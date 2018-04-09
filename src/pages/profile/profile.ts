import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { comm_class } from '../mycommunities/comm_class';

import {CommProvider} from '../../providers/comm/comm';
import {ProfileProvider} from '../../providers/profile/profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  c1:comm_class[]=[];
 p1:comm_class[]=[];
  com_id:number;
  com_name:string;
  cid_fk:number;
  comm_desc:string;
  banner_img:string;
  email_id:string;
  email:string;



  constructor(public _pr:ProfileProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      this.email_id = localStorage.getItem("user_email");
    console.log("ionViewDidLoad MycommunitiesPage");
    this._pr.getName(this.email_id).subscribe(
      (data: comm_class[]) => {
      this.p1 = data;
      console.log(this.p1);
    });

  //   this.email=localStorage.getItem("user_email");
   
  //   this._pr.getName(this.email).subscribe(
  //   (dat:comm_class[])=>{
  //     this.p1=dat;    
  //   }
  //  );
}

}
