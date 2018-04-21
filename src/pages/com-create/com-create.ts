import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { comm_class } from '../mycommunities/comm_class';
import { ComCreateProvider } from '../../providers/com-create/com-create';

/**
 * Generated class for the ComCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com-create',
  templateUrl: 'com-create.html',
})
export class ComCreatePage {
  crte:comm_class[]=[];
  cm_create:comm_class;
  com_id:number;
  com_nm:string;
  cat_id:number;
  com_desc:string;
  img:string;
  u_email:string;
  constructor(public com_create:ComCreateProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComCreatePage');
  }

  create(){
    this.cm_create=new comm_class((+this.com_id),this.com_nm,(+this.cat_id),this.com_desc,this.img,this.u_email);
    this.com_create.addCommunity(this.cm_create).subscribe(
    (dt:any)=>{
      console.log(dt);
      alert("created!!");
    }
  
  );
  }

  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
