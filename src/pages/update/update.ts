import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { updt_user } from '../update/update_class';
import { UpdateProvider } from '../../providers/update/update';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  ar:updt_user;
  email:string;
  unm:string;
  gender:string;
  mobile:number;
  passwd:string;
  constructor(public updata:UpdateProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
    this.email=localStorage.getItem("user_email"); 
  }

  update(){
    this.ar=new updt_user(this.email,this.unm,(+this.mobile),this.gender,this.passwd);
    this.updata.updateUser(this.email,this.ar).subscribe(
      ()=>{
        alert("updated...");
      }
    );
  }

  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
