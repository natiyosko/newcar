import { Component } from '@angular/core';
import { PagingService } from './service/paging.service';
import { BirdsService } from './service/bird.service';
import { BeastsService } from './service/beasts.service';
import { WildsService } from 'src/app/service/wild.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avra-zoo';

  constructor(public paging:PagingService, public birds:BirdsService,
    public beasts:BeastsService,public wilds:WildsService){}

  getUp(ev){
    console.log('AppComponent  getUp', ev);

    switch (this.paging.currentPanel) {
      case 'birds':
          let newBirdIndex = this.getNewCuurentIndex(
            this.birds.currentBirdIndex, ev, this.birds.birds)
          this.birds.currentBirdIndex = newBirdIndex
          this.birds.currentBird = this.birds.birds[newBirdIndex]
        break;
      case 'beasts':
         let newBeastIndex = this.getNewCuurentIndex(
            this.beasts.currentBeastIndex, ev, this.beasts.beasts)
          this.beasts.currentBeastIndex = newBeastIndex
          this.beasts.currentBeast = this.beasts.beasts[newBeastIndex]
        break;
      case 'wilds':
      let newWildIndex = this.getNewCuurentIndex(
        this.wilds.currentWildIndex, ev, this.wilds.wilds)
      this.wilds.currentWildIndex = newWildIndex
      this.wilds.currentWild = this.wilds.wilds[newWildIndex]
        break;
          
      default:
        break;
    }

  }

  private getNewCuurentIndex(current:number, delta:number, array:{}[]) : number{
    let max = array.length -1;
    let newIndex = current + delta
    if (newIndex > max) {
      newIndex = 0
    }    
    if (newIndex < 0) {
      newIndex = max
    }
    return newIndex
  }

}