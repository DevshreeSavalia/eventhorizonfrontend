import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { updt_user } from '../update/update_class';
import { UpdateProvider } from '../../providers/update/update';
import { NullAstVisitor } from '@angular/compiler';
import { ProfilePage } from '../profile/profile';

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
  updt:updt_user;
  email:string;
  unm:string;
  gender:string;
  mobile:number;
  passwd:string;
  constructor(public updata:UpdateProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  update(){
    this.email=localStorage.getItem("user_email");
    console.log(this.email);
    this.updt=new updt_user(null,this.unm,(+this.mobile),this.gender,this.passwd);
    this.updata.updateUser(this.email,this.updt).subscribe(
      ()=>{
        //alert("updated...");
        this.navCtrl.push(ProfilePage);
        console.log(this.updt);
      }
    );
  }

  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
