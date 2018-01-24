import { PlaceLocation } from "./PlaceLocation";
import { TastingRating } from "./TastingRating";

export class Coffee{
    _id:string;
    name:string;
    place:string;
    type:string;
    location: PlaceLocation;
    rating:number;
    notes:string;
    tastingRating:TastingRating;

    /**
     *
     */
    constructor(name:string="", place:string="", type:string="", location: PlaceLocation=new PlaceLocation('','',null,null),
     rating:number=null, notes:string="", tastingRating:TastingRating=new TastingRating(null,null,null,null,null,null)) {
        
        this.name=name;
        this.place=place;
        this.type=type;
        this.location= location;
        this.rating=rating;
        this.notes=notes;
        this.tastingRating=tastingRating;
    }
}