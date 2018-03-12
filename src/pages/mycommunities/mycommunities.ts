import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { comm_class } from "../mycommunities/comm_class";
import { CommProvider } from "../../providers/comm/comm";
import { CommNamePage } from "../comm-name/comm-name";
// import { CommNamePage } from '../comm-name/comm-name';

@IonicPage()
@Component({
  selector: "page-mycommunities",
  templateUrl: "mycommunities.html"
})
export class MycommunitiesPage {
  c1: comm_class[] = [];
  com_id: number;
  com_name: string;
  cid_fk: number;
  comm_desc: string;
  banner_img: string;
  email_id: string;

  constructor(
    public _cm: CommProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.email_id = localStorage.getItem("user_email");
    alert(this.email_id);
    console.log("ionViewDidLoad MycommunitiesPage");
    this._cm.getCommunityById(this.email_id).subscribe((data: comm_class[]) => {
      this.c1 = data;
      console.log(this.c1);
      /*this.com_id=data[0].comm_id;
        this.com_name=data[0].comm_name;
        this.cid_fk=data[0].c_id_fk;
        this.comm_desc=data[0].comm_desc;
         this.banner_img=data[0].banner_image;*/
    });
  }
  com_page(id: number) {
    console.log(id);
    this.navCtrl.push(CommNamePage, {
      id: id
    });
  }
}
