import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OneService } from '../one.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  constructor(private ts1:OneService){}

  mobiletwo:any;
  ngOnInit(): void {
    
    this.mobiletwo=this.ts1.mobiles;
    
  }
  updatetwo(){
    this.ts1.mobiles.push("ashok123");
  }


  // @Input() mane:any;
//   @Output() customeve=new EventEmitter();
//  message="Name is ashok pusunuru";
//   updateEvent(){

//   this.customeve.emit(this.message);
// }

// updateMessage(e:any){
//   this.message=e.target.value;
// } 
  
// @Output() custome=new EventEmitter();

// message="this is ashok pusunuru";

// updateMessage(){
//   this.custome.emit(this.message);
// } 
// updatedmassge(e:any){
//   this.message=e.target.value 
// }

// @Output() custome=new EventEmitter();
// message="this is ashok pusunuru"
// updateemail(){
//   this.custome.emit(this.message);
// }
// updateten1(e:any){
//   this.message=e.target.value; 
// }



// data="data of view child"
// demo(){
//   return this.data;
// }
  

}
