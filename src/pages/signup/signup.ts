import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupdataProvider } from '../../providers/signupdata/signupdata';
import { signup } from './signup_class';
import { UpcomingevtPage } from '../upcomingevt/upcomingevt';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  email:string;
  uname:string;
  mobile:number;
  gender:string;
  type:string;
  password:string;
  sign:signup[]=[];
  signdt:signup;
  constructor(public _signdata:SignupdataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  adduser(){
    this.signdt=new signup(this.email,this.uname,(+this.mobile),this.gender,this.type,this.password);
    console.log("signed up..",this.signdt);
    this._signdata.addUser(this.signdt).subscribe(
      (item:any)=>{
        this.navCtrl.push(UpcomingevtPage);
        alert("logged in..");
      }
    );
  }

}
