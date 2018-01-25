import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Coffee } from '../logic/coffee';
import {Router} from '@angular/router';
import { GeolocationService } from '../geolocation.service';
import { FireBaseService } from '../firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:any;
  constructor(private dataService:DataService, private router: Router, private geoLocation:GeolocationService,
  private firebaseService:FireBaseService) { }

  ngOnInit() {
    // this.dataService.getList(list=>{
    //   this.list=list;
    // });
    this.firebaseService.getList(list=>{
      //this.list=list[0];
      this.list = Object.values(list)
      console.log(list[0]);
      console.log('This List', this.list);
    });
  }

  goDetails(coffee:Coffee){
    console.log('something',coffee);
   // this.router.navigate(["/coffee/",coffee._id])
   console.log("ID- ",coffee._id)
   this.router.navigate(["coffee", '-L3dxNv_rAXSmr0UV4ag'])
  }

  goToMap(coffee:Coffee){
    const mapUrl = this.geoLocation.getMapLink(coffee.location);
    location.href=mapUrl;
  }
  shareCoffeee(coffee:Coffee){
    const shareText=`I had coffee at ${coffee.place} and it's ${coffee.rating} from my side.`
    if('share' in navigator){
      navigator["share"]({
        title:coffee.name,
        text:shareText,
        url: window.location.href
      }).then(() => console.log("shared!")).catch(()=>console.log("error occured!"))
    }else{
      const shareUrl = `whatsapp://sendtext=${encodeURIComponent(shareText)}`;
      location.href=shareUrl;
    }

  }

}
