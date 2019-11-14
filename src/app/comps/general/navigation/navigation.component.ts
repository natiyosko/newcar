import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/service/paging.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavComponent implements OnInit {

  constructor(public paging:PagingService) { }

  ngOnInit() {
  }


  navTo(pagename:string):void{
    console.log(`navTo( ${ pagename } )`);
    this.paging.currentPanel = pagename
  }

}