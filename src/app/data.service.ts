import { Injectable } from '@angular/core';
import { Coffee } from './logic/coffee';
import { PlaceLocation } from './logic/PlaceLocation';
import { TastingRating } from './logic/TastingRating';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  //public endpoint = "http://localhost:3000";
 public endpoint = "https://my-coffee-app-f8a64.firebaseio.com"

  get(coffeeId:string,callback){
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`)
        .subscribe(res=>{
          console.log(res.json());
          callback(res.json());
        });
  }

  getList(callback){

    // const list = [
    //   new Coffee('Affogato','Bangalore','Short Black',new PlaceLocation('CCD Bilekhalli, Bangalore',''),5,'',new TastingRating(5,5,5,5,5,4)),
    //   new Coffee('Americano','Ranchi','Doppio',new PlaceLocation('CCD Bariyatu, Ranchi','',23,24),5,'',new TastingRating(5,5,5,5,5,4)),
    //   new Coffee('Bicerin','Vrindavan','Normal',new PlaceLocation('CCD, Vrindavan','',23,24),5,'',new TastingRating(5,5,5,5,5,4)),
    //   new Coffee('Breve','London','Doppio',new PlaceLocation('Costa Caffee, London','',23,24),5,'',new TastingRating(5,5,5,5,5,4)),
    //   new Coffee('Café Bombón','Zurich','Long Black',new PlaceLocation('Costa Caffee, Zurich','',23,24),5,'',new TastingRating(5,5,5,5,5,4)),
    //   new Coffee('Café au lait','Mumbai','Doppio',new PlaceLocation('Costa Caffee, Mumbai','',23,24),5,'',new TastingRating(5,5,5,5,5,4)),
    //   new Coffee('Caffé Corretto','Delhi','Short Black',new PlaceLocation('Costa Caffee, Delhi','',23,24),5,'',new TastingRating(5,5,5,5,5,4)),
    //   new Coffee('Caffé Latte','Paris','Milky',new PlaceLocation('Costa Caffee, Paris','',23,24),5,'',new TastingRating(5,5,5,5,5,4)),
    // ]
    // callback(list);
    this.http.get(`${this.endpoint}/coffees`)
        .subscribe(res=>{
          console.log(res.json());
          callback(res.json());
        })
  }

  save(coffee, callback){
    if(coffee._id){
      //Update
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`,coffee)
      .subscribe(res=>{
        console.log(res.json());
        callback(true);
      });
    }
    else{
      //insert
      this.http.post(`${this.endpoint}/coffees`,coffee)
      .subscribe(res=>{
        console.log(res.json());
        callback(true);
      });
    }
    
  }

}
