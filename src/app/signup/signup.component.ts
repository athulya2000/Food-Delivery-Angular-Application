import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 email=""
 password=""

 readValues=()=>
 {
  let data:any={"email":this.email,"password":this.password}
  console.log(data)
 }
}
