import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PastevtPage } from '../pastevt/pastevt';
import { UpSegPage } from '../up-seg/up-seg';
import { comm_class } from './comm_class_id';
import { CommDataProvider } from '../../providers/comm-data/comm-data';
import { MemberPage } from '../member/member';
import { LoginPage } from '../login/login';
import { com_reg_class } from './com_reg_class';
import { CommRegProvider } from '../../providers/comm-reg/comm-reg';

/**
 * Generated class for the CommNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comm-name',
  templateUrl: 'comm-name.html',
})
export class CommNamePage {
  arr:comm_class[]=[];
  id:string;
  reg: com_reg_class;
  comm_desc:string;
  email: string;
  com_reg_id: number;
  com_id:number;
  constructor(public _comm_data:CommDataProvider,
    public com_reg:CommRegProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommNamePage');
    this.id=this.navParams.get('id');
    this.email=localStorage.getItem("user_email");
    console.log(this.email);
    console.log(this.id);
    this._comm_data.getCommunityByIdd(this.id).subscribe(
      (dataa:comm_class[])=>{
         this.arr=dataa;
         console.log(this.arr);
      }
    );
  }

  join() {
    this.reg = new com_reg_class(null, (+this.id), this.email);
    this.com_reg.addReg(this.reg).subscribe(
    (dt:any)=>{
          console.log(dt);
          alert("joined!!");
      }
    );
  }

  up(id:number){
    this.navCtrl.push(UpSegPage,{id:id});
  }

  past(cid:number){
    this.navCtrl.push(PastevtPage,{id:cid});
  }

  member(mid:number){
    this.navCtrl.push(MemberPage,{id:mid});
  }
  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
