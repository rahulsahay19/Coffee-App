import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FireBaseService {
    constructor(private http: Http) { }
    
    // storeCoffees(coffee, callback){
    //     this.http.post('https://my-coffee-app-f8a64.firebaseio.com/data.json',coffee)
    //     .subscribe(res=>{
    //         console.log(res.json());
    //         callback(true);
    //       });
    // }

    public endpoint = "https://my-coffee-app-f8a64.firebaseio.com"

  get(coffeeId:string,callback){
      this.http.get(`${this.endpoint}/coffees/${coffeeId}`)
          .subscribe(res=>{
            console.log(res.json());
            callback(res.json());
          });
    }

    getList(callback){
    this.http.get(`${this.endpoint}/coffees/data.json`)
    .subscribe(res=>{
      console.log(res.json());
      callback(res.json());
    })
}

    storeCoffees(coffee, callback){
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
          this.http.post(`${this.endpoint}/coffees/data.json`,coffee)
          .subscribe(res=>{
            console.log(res.json());
            callback(true);
          });
        }
}
}