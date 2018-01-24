export class TastingRating{
    aroma:number;
    body:number;
    flavour:number;
    intensity:number;
    sweetness:number;
    aftertaste:number;

    /**
     *
     */
    constructor(aroma:number, body:number, flavour:number, intensity:number, sweetness:number, aftertaste:number) {
        this.aroma=aroma;
        this.body=body;
        this.flavour=flavour;
        this.intensity=intensity;
        this.sweetness=sweetness;
        this.aftertaste=aftertaste;
    }
}