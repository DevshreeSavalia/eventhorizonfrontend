import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { event_class } from '../event-create/event_class';
import { EventCreateProvider } from '../../providers/event-create/event-create';
/**
 * Generated class for the EventCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {
  crte:event_class[]=[];
  e_create:event_class;
  event_id:string;
  event_name:string;
  event_startdate:string;
  event_enddate:string;
  event_venue:string;
  com_id:string;
  event_desc:string;
  img:string;
  selectedFile: File = null;
  constructor(public eve_create:EventCreateProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventCreatePage');
  }
  processWebImage(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }
  create(){
    //this.e_create=new event_class((+this.event_id),this.event_name,this.event_startdate,this.event_enddate,this.event_venue,(+this.com_id),this.event_desc,this.img);
    console.log('inside create');
    const fd = new FormData();
    fd.append("e_id", this.event_id);
    fd.append("e_name", this.event_name);
    fd.append("e_startdate", this.event_startdate);
    fd.append("e_enddate", this.event_enddate);
    fd.append("e_venue", this.event_venue);
    fd.append("comm_id_fk", this.com_id);
    fd.append("e_desc", this.event_desc);
    fd.append("image", this.selectedFile, this.selectedFile.name);
    
    this.eve_create.addEvent(fd).subscribe(
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
