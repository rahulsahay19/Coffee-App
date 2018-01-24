import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FireBaseService {
    constructor(private http: Http) { }
    
    storeCoffees(coffee, callback){
        this.http.post('https://my-coffee-app-f8a64.firebaseio.com/data.json',coffee)
        .subscribe(res=>{
            console.log(res.json());
            callback(true);
          });
    }
}