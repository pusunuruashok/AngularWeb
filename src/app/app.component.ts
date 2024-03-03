import { Component, ViewChild,AfterViewInit, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
h_results: any;
  // title:String = 'Ashokpusunuru';

  // test(){
  //   return this.title;
  // }

//  d:string=new Date().toLocaleDateString();
//  d1:string=new Date().toLocaleTimeString();
//  d2: string="";
//  timerid=setInterval(()=>{
//   this.d2=new Date().toLocaleTimeString();
//  },1000)
  
//  isdisabled:boolean=true;
//  titelee:string="an imagnaine";
//  isactive:boolean=true;

//   // path:string="special"
//   applyc1=true;
//   applyc2=true;
//  cvar:string='blue'
//  counter:any=1;
//  test(){
//   if(this.counter < 10)
//   this.counter++
 

//  else{
//   alert("invalid message")
//  }
// }
// city:string = "Hyederarabad ashok";



// test(){
//   this.city="banglaore"
// }
// }
// isball=["ashok","ashok1","ashok2"];
// num1:number=10;
// num2:number=20;
// op:string='';

// name="angular";
// name1="ashokpsunuru";
// name2="ASHOK";
// sal=40000;
// person={
//   name:"Ashok",
//   age:33,
//   salary:3000
// }
// dob=new Date();
// percent1=39;
// company="microsoft";

// wish="hello goodmoring";

// person1:any={
//   name:"ashok",
//   gender:"f",

// }
// wish12="goodevening";

// } 

// email="";

// // updateEmail(ip:any){
// //   this.email=ip.value;

// // }
// updateButton(ip:any){
// this.email=ip.value;
// }

// ashok = ["Ashok","Ashok1","Ashok2","Ashok3"] 
constructor(){
  
}

// @ViewChild(HeaderComponent) head1:any;

@ViewChild("t1") header2:any;
// test(){
//   console.log(this.head1.demo());
// // }
// ngAfterViewInit(){
//   console.log(this.header2)
//   this.header2.nativeElement.onkeyup=()=>{


//   console.log(this.header2.nativeElement.value);
// }

// // test1:any(){

// //   this.header2.nativeElement.innerText="blue";

// // } 
// }

@ViewChild("para") p:any;
@ViewChildren("heading") h:any;
test(){
  
  console.log(this.p.nativeElement.innerText); 
  console.log(this.h_results[0].nativeElement.innerText); 
  // console.log(this.h);
  // for(let ele of this.h)
  console.log(this.h.nativeElement.innerText); 
 
} 

} 
