import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Coffee } from '../logic/coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';
import { DataService } from '../data.service';
import { FireBaseService } from '../firebase.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  routingSubscription:any;
  coffee:Coffee;
  tastingEnabled:boolean;
  types = ["Espresso", "Americano", "Ristretta", "Cappuccino", "Frappe"];
   
  constructor(private route:ActivatedRoute, 
    private geoLocation:GeolocationService,
    private router:Router,
    private dataService:DataService,
    private firebaseService:FireBaseService) { }

  ngOnInit() {
    this.coffee= new Coffee();
    this.routingSubscription = 
      this.route.params.subscribe(params=>{
        console.log(params["id"]);
        if(params["id"]){
          this.dataService.get(params["id"],res=>{
            this.coffee=res;
            if(this.coffee.tastingRating){
              this.tastingEnabled=true;
            }
          });
        }
      });

      this.geoLocation.requestLocation(location=>{
        if(location){
          this.coffee.location.latitude=location.latitude;
          this.coffee.location.longitude=location.longitude;
        }
      })
  }

  ngOnDestroy(){
    this.routingSubscription.unsubscribe();
  }

  tastingRatingChanged(checked:boolean){
    if(checked){
      this.coffee.tastingRating = new TastingRating(null,null,null,null,null,null);
    }else{
      this.coffee.tastingRating = null;
    }
  }

  save(){
    this.dataService.save(this.coffee,result=>{
      if(result){
        this.router.navigate(["/"]);
      }
    });
    // this.firebaseService.storeCoffees(this.coffee, result=>{
    //   if(result){
    //     this.router.navigate(["/"]);
    //   }
    // });
  }

  cancel(){
    this.router.navigate(["/"]);
  }

}
