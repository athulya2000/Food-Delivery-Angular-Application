import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
 email=""
 password=""
 confirmpassword=""


 readValues=()=>
 {
  let data:any={"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log( data)
 }
}
