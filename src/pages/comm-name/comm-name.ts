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
import { UpcomSegDataProvider } from "../../providers/upcom-seg-data/upcom-seg-data";
import { upcomm_class } from "../upcomingevt/upcom_class";
import { up_seg_class } from '../up-seg/up_seg_class';
import { past_seg_class } from '../pastevt/past_seg_class';
import { PastSegDataProvider } from '../../providers/past-seg-data/past-seg-data';
import { mem_class } from '../member/mem_class';
import { MemberDataProvider } from '../../providers/member-seg-data/member-seg-data';

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
  [x: string]: any;
  evt: string = "upcm";
  past_ar: past_seg_class[] = [];
  arr: comm_class[] = [];
  ar: up_seg_class[] = [];
  id: string;
  reg: com_reg_class;
  comm_desc: string;
  email: string;
  com_reg_id: number;
  com_id: number;
  mem_ar: mem_class[] = [];
  constructor(public _upseg: UpcomSegDataProvider, public _comm_data: CommDataProvider,
    public com_reg: CommRegProvider, public navCtrl: NavController, public navParams: NavParams,
    public _past_data: PastSegDataProvider,
    public _memdata: MemberDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommNamePage');
    this.id = this.navParams.get('id');
    this.email = localStorage.getItem("user_email");
    console.log(this.email);
    console.log(this.id);
    this._comm_data.getCommunityByIdd(this.id).subscribe(
      (dataa: comm_class[]) => {
        this.arr = dataa;
        console.log(this.arr);
      }
    );
    this._upseg.getUpSegment(this.id).subscribe(
      (item: up_seg_class[]) => {
        this.ar = item;
        console.log(this.ar);
        console.log("add:" + this.ar[0].e_venue);
      });

    this._past_data.getPastSegment(this.id).subscribe(
      (data: past_seg_class[]) => {
        console.log(this.past_ar);
        this.past_ar = data;
      }
    );

    this._memdata.getMembSegment(this.id).subscribe(
      (data: mem_class[]) => {
        this.mem_ar = data;
        console.log(this.mem_ar);
      },
      function (e) {
        alert(e);
      },
      function () {
        //alert('done');
      }
    );
  }

  join() {
    this.reg = new com_reg_class(null, (+this.id), this.email);
    this.com_reg.addReg(this.reg).subscribe(
      (dt: any) => {
        console.log(dt);
        alert("joined!!");
      }
    );
  }

  up(id: number) {
    this.navCtrl.push(UpSegPage, { id: id });
  }

  past(cid: number) {
    this.navCtrl.push(PastevtPage, { id: cid });
  }

  member(mid: number) {
    this.navCtrl.push(MemberPage, { id: mid });
  }
  logout() {
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
