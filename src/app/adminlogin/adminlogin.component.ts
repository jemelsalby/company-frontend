import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myRouter:Router) { }
userName=""
password=""

readValue=()=>{
  let data={
    "userName":this.userName,
    "password":this.password
  }
  if (this.userName=="admin" && this.password=="12345") {
    this.myRouter.navigate(["/adminhome"])
    
  } else {
    alert("invalid credential")
  }
  console.log(data)

  this.userName=""
  this.password=""
}

  ngOnInit(): void {
  }

}
