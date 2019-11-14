import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildsService {

  constructor() {}

  wilds = [
    {name:'Land-Rover', model:'Range-Rover', Creature:'BUK', img:'https://cdn.motor1.com/images/mgl/eLqQM/s1/2019-range-rover-sentinel.jpg'},
    {name:'Mercedes', model:'G-Class', Creature:'GERMANY', img:'https://cdn.motor1.com/images/mgl/AERLN/s1/mercedes-g-class-stronger-than-time.jpg'},
    {name:'Jeep', model:'Compass', Creature:'USA', img:'https://www.icar.co.il/_media/top_models/62.jpg'},
    {name:'BMW', model:'X2', Creature:'GERMANY', img:'https://file.kbb.com/kbb/vehicleimage/housenew/640x480/2019/2019-bmw-x2-frontside_bmx221901.jpg'},
  
  ]
  currentWildIndex = 0
  currentWild = this.wilds[this.currentWildIndex]
}
