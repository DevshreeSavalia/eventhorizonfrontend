import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { up_seg_class } from "./up_seg_class";
import { UpSegIdProvider } from "../../providers/up-seg-id/up-seg-id";
import { GeolocationProvider } from "../../providers/geolocation/geolocation";
import { LoginPage } from '../login/login';
import { UpSegMemProvider } from '../../providers/up-seg-mem/up-seg-mem';
import { up_mem } from './up_mem_class';
import { evt_reg } from './evt_reg_class';
import { EvtRegProvider } from '../../providers/evt-reg/evt-reg';

declare var google;

/**
 * Generated class for the UpSegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-up-seg",
  templateUrl: "up-seg.html"
})
export class UpSegPage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;
  ar: up_seg_class[] = [];
  email: string;
  name: string;
  date: string;
  venue: string;
  id: number;
  arr:up_mem[]=[];
  reg:evt_reg;
  e_reg:evt_reg[]=[];
  constructor(
    public _upseg: UpSegIdProvider,
    public up_member:UpSegMemProvider,
    public register:EvtRegProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: GeolocationProvider
  ) {}

  ionViewDidLoad() {
    this.id = this.navParams.get("id");
    console.log("event::"+this.id);
    this.email=localStorage.getItem("user_email");
    console.log(this.email);
    console.log("ionViewDidLoad UpSegPage");
    this._upseg.getUpSegmentById(this.id).subscribe(
      (item: up_seg_class[]) => {
      this.ar = item;
      console.log(this.ar);
      this.geo_code(this.ar[0].e_venue);
    }); 
    this.up_member.getUpMemb(this.id).subscribe(
      (dt:up_mem[])=>{
        this.arr=dt;
        console.log(this.arr);
      }
    );
  }

  joinevt(){
    this.reg=new evt_reg(null,this.id,this.email);
    console.log(this.reg);
    this.register.evtReg(this.reg).subscribe(
      (e_reg:evt_reg[])=>{
        console.log(this.e_reg);
        alert("Welcome...");
      }
    );
  }

geo_code(address:string){
  console.log("inside geo_code::");
  this.geolocation.getCurrentPosition(address).subscribe(
    (data:any)=>{
      this.loadMap(data);
      console.log("add:"+data);
    }
  );
}
  loadMap(data:any) {
    let lat=data["results"][0].geometry.location.lat;
    let lng=data["results"][0].geometry.location.lng;
    let latLng = new google.maps.LatLng(lat, lng);
    console.log("lat:"+lat);
    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({
      position: latLng,
      title: this.venue,
      map: this.map,
      draggable: true
    });
  }

  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}

  
