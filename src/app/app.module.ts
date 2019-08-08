import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { HeadrComponent } from './headr/headr.component';
import { Routes  } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { Productlistservice } from './productlistservice';

const myrouting:Routes = [
  {path:"" , redirectTo : "home" , pathMatch : "full"},
  {path:"home", component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"product/:ide",component:ProductlistComponent},
  {path:'contactus',component:ContactusComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutusComponent,
    ContactusComponent,
    MainareaComponent,
    HeadrComponent,
    ProductlistComponent,
  

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myrouting)
  ],
  providers: [Productlistservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
