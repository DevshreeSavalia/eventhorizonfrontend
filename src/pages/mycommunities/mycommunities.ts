import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams} from "ionic-angular";
import { comm_class } from "../mycommunities/comm_class";
import { CommProvider } from "../../providers/comm/comm";
import { CommNamePage } from "../comm-name/comm-name";
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: "page-mycommunities",
  templateUrl: "mycommunities.html"
})
export class MycommunitiesPage {
  menuIsHidden: boolean = false;
  c1: comm_class[] = [];
  email_id: string;

  constructor(
    public _cm: CommProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.email_id = localStorage.getItem("user_email");
    console.log("ionViewDidLoad MycommunitiesPage");
    this._cm.getCommunityById(this.email_id).subscribe(
      (data: comm_class[]) => {
      this.c1 = data;
      console.log(this.c1);
    });
  }
  com_page(id: number) {
    this.navCtrl.push(CommNamePage, {
      id: id
    });
  }

  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
