import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  empCode=""
  email=""
  address=""
  phoneNumber=""
  userName=""
  password=""
  dob=""
  
  
  readvalues=()=>{
    let data={
      "name":this.name,
      "empCode":this.empCode,
      "email":this.email,
      "address":this.address,
      "phoneNumber":this.phoneNumber,
      "userName":this.userName,
      "password":this.password,
      "dob":this.dob
  }
    console.log(data)
    this.myapi.addemp(data).subscribe()
    alert("Employee Data Added")
  }
    ngOnInit(): void {
    }

}
