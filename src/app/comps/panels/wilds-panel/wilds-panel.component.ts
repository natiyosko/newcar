import { Component, OnInit } from '@angular/core';
import { WildsService } from 'src/app/service/wild.service';

@Component({
  selector: 'app-wilds-panel',
  templateUrl: './wilds-panel.component.html',
  styleUrls: ['./wilds-panel.component.css']
})
export class WildsPanelComponent implements OnInit {

  constructor(public wildsSvc:WildsService) { }

  ngOnInit() {
  }

}
