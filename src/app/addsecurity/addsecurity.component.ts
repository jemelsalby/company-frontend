import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  sCode=""
  sName=""
  sAdd=""
  sPhone=""
  sUsername=""
  sPassword=""
  
  readvalues=()=>{
    let data={
      "sCode":this.sCode,
      "sName":this.sName,
      "sAdd":this.sAdd,
      "sPhone":this.sPhone,
      "sUsername":this.sUsername,
      "sPassword":this.sPassword
  }
    console.log(data)
    this.myapi.addsecurity(data).subscribe()
    alert("Security Data Added")
  }
    ngOnInit(): void {
    }

}
