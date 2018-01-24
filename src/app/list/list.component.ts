import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Coffee } from '../logic/coffee';
import {Router} from '@angular/router';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:[Coffee];
  constructor(private dataService:DataService, private router: Router, private geoLocation:GeolocationService) { }

  ngOnInit() {
    this.dataService.getList(list=>{
      this.list=list;
    });
  }

  goDetails(coffee:Coffee){
    this.router.navigate(["/coffee",coffee._id])
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
