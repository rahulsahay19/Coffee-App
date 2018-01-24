export class PlaceLocation{
    address:string;
    city:string;
    latitude?:number;
    longitude?:number;

    /**
     *
     */
    constructor(address:string, city:string, latitude?:number, longitude?:number) {
        this.address=address;
        this.city=city;
        this.latitude=latitude;
        this.longitude=longitude;        
    }
}