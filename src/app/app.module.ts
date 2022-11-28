import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { VegComponent } from './veg/veg.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { FastFoodComponent } from './fast-food/fast-food.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:SignInComponent
  },
  {
    path:"sign up",
    component:SignupComponent
  },
  {
    path:"veg",
    component:VegComponent
  },
  {
    path:"nonveg",
    component:NonVegComponent
  },
  {
    path:"fastfood",
    component:FastFoodComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignupComponent,
    VegComponent,
    NonVegComponent,
    FastFoodComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
