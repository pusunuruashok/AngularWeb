import { Component, OnInit } from '@angular/core';
import { OneService } from '../one.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
mobileone:any;
  constructor(private ps:OneService){}

  ngOnInit(): void {
    
     this.mobileone=this.ps.mobiles;
  }

  updateone(){
    this.ps.mobiles.push("ashok123345");
  }

}
