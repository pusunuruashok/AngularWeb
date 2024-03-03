import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneService implements CanActivate {
  mobiletwo: any;
  mobileone: any;

  constructor(private r:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): boolean {
     return true
  }


 
  
  mobiles=["Realme","Readme","Vivo","Neo6"];
  

  if(logedin=true){
    return true;


  }
}
