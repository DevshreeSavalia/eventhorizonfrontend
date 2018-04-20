import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {pro_class} from '../profile/pro_class';
import {ProfileProvider} from '../../providers/profile/profile';
import { LoginPage } from '../login/login';

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

  p1:pro_class[] = [];
  email_id: string;

  constructor(public _pr:ProfileProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.email_id = localStorage.getItem("user_email");
    console.log("ionViewDidLoad MyProfilePage");
    this._pr.getProfile(this.email_id).subscribe(
      (data:pro_class[]) => {
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
