import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupdataProvider } from '../../providers/signupdata/signupdata';
import { signup } from './signup_class';
import { UpcomingevtPage } from '../upcomingevt/upcomingevt';
import { email } from '../../providers/signupdata/mailclass';

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
  token:string;
  tokenn:string;
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
      var val = Math.floor(1000 + Math.random() * 9000);
      this.token=val.toString();
      var message="Respected Sir/Madam,Congratulations!!!Greetings from Event Horizon.You have successfully signed up at Event Horizon App.Use it wisely.Your OTP is  "+val+".If there is any feedback do inform us on evthorizonn@gmail.com";
        this._signdata.sendmail(new email(message,this.email,"Verification")).subscribe((data)=>{
          console.log(data);
        });
        alert('Check your mail!!!');
      }
    );
  }

  verify(){
    if(this.token.match(this.tokenn)){
      this.navCtrl.push(UpcomingevtPage);
    }
    else{
      alert('Invalid Token value...Enter again!!!');
    }
  }

}
