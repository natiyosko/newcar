import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
 
export class BeastsService {
  constructor() { 
    //console.log('ctor BirdsService', this.birds);
    
  }
  beasts = [
    { name:'Rolls-Royce', model: 'Phantom VIII', Creature:'BUK',img:'https://www.caranddriving.com/cdwebsite/image169.ashx?url=https://ssl.caranddriving.com/f2/images/used/big/rollsroycephantom2003to2017.jpg'},
    { name:'Bentley', model: 'GT', Creature:'USA',img:'https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/bentley/continental/2020/gt-convertible-w12/01-2020-bentley-continental-gt-convertible-w12-first-review.jpg'},
    { name:'Mercedes', model: 'Maybach', Creature:'GERMANY',img:'https://di-uploads-pod6.dealerinspire.com/keenanmercedes/uploads/2017/07/Mercedes-Maybach-S-650-cabriolet-Keenan-Motors-Exterior2-1024x455.jpg'},
    { name:'Lamborghini', model: 'Aventador', Creature:'ITALY',img:'https://i.ytimg.com/vi/UMH6toXUXe8/maxresdefault.jpg'}
  ]
  

  currentBeastIndex = 0
  currentBeast = this.beasts[this.currentBeastIndex]

  
}