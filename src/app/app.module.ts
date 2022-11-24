import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { VegComponent } from './veg/veg.component';
import { NonVegComponent } from './non-veg/non-veg.component';

const myRoute:Routes=[
  {
    path:"sign in",
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
  }
]


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignupComponent,
    VegComponent,
    NonVegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
