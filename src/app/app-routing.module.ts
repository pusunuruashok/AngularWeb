import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { OneService } from './one.service';

const routes: Routes = [
  {"path":"about",component:AboutComponent},
  {"path":"home",component:HomeComponent},
  {"path":"header",component:HeaderComponent, canActivate:[OneService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
